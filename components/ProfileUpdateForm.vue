<script setup lang="ts">
import type { IProfile } from '~/Interfaces/IProfile';
import { ValidateJWT } from '~/services/AuthService/ValidateJWT';
import { handleImageUpload } from '~/services/ImageUploadService/ImageUploadService';
import { editProfile } from '~/services/ProfileService.ts/editProfile';

//check unauthorized redirect
if (!(await ValidateJWT())) {
    GoToLogin()
}
const props = defineProps({
    pfpUrl: {
        type: String,
        required: false,
        default: null,
    },
    existingUsername: String,

    showForm: Boolean
})

defineEmits(['close']);


const usernameRef = ref(props.existingUsername || '')
const pfpUrlRef = ref(props.pfpUrl || '')

const fileInput = ref<HTMLInputElement | null>(null)
const fileInputError = ref('')

const result = ref('')

async function handleFileChange() {
    const file = fileInput.value?.files?.[0]
    if (file) {
        console.log('Selected file:', file.name)
    }

    if (!file) { return }
    try {
        pfpUrlRef.value = await handleImageUpload(file)
        console.log(pfpUrlRef.value)
    } catch (error) {
        fileInputError.value = error as string
    }

}
const handleSubmit = async () => {
    const model: IProfile = {
        pfpUrl: pfpUrlRef.value,
        username: usernameRef.value,
        reviews: []
    }
    result.value = await editProfile(model)
}
</script>
<template>

    <div class="w-full flex justify-center fixed z-50">
        <Transition name="slide">
            <div v-if="showForm" class="py-6 px-10 md:w-1/2 bg-white rounded-md flex flex-col gap-4">
                <button @click="$emit('close')" class="self-end text-gray-500 hover:text-black">
                    ✕
                </button>
                <h1 class="text-2xl mb-6">Edit Profile</h1>

                <form class="space-y-4" @submit.prevent="handleSubmit">

                    <!-- pfp -->
                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700">Profile Picture</label>
                        <div class="flex justify-center">
                            <ProfilePfp :pfpUrl="pfpUrlRef"></ProfilePfp>
                        </div>

                        <div class="w-full flex justify-center p-4">
                            <label
                                class="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
                                Upload File
                                <input type="file" accept="image/*" multiple="false" ref="fileInput" class="hidden"
                                    @change="handleFileChange" />
                            </label>
                            <p v-if="fileInputError" class="text-sm text-red-500"> {{ fileInputError }}</p>
                        </div>
                        <p v-if="result" class="text-sm text-red-500"> {{ result }}</p>


                    </div>

                    <!-- text -->
                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700">Username</label>
                        <input id="text" name="text" rows="3"  v-model="usernameRef"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"></input>

                    </div>

                    <!-- Form Actions -->
                    <div class="flex justify-end space-x-4 pt-4">
                        <button type="submit"
                            class="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </div>



                </form>
            </div>
        </Transition>
    </div>

    <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="$emit('close')" />
</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease;
}

.slide-enter-from {
    transform: translateY(100%);
}

.slide-leave-to {
    transform: translateY(100%);
}
</style>