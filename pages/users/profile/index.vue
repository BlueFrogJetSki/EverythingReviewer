<script setup lang="ts">
import ProfileUpdateForm from '~/components/ProfileUpdateForm.vue';
import type { IProfile } from '~/Interfaces/IProfile';
import { ValidateJWT } from '~/services/AuthService/ValidateJWT';
import { fetchProfile } from '~/services/ProfileService.ts/fetchProfile';

//check unauthorized redirect
if (!(await ValidateJWT())) {
    GoToLogin()
}

//fetch profile data
//fetch reviews made
const profileData: IProfile = await fetchProfile()
const showForm = ref(false)
const handleShowForm = () => {
    showForm.value = !showForm.value
}
if (profileData === null) { GoToLogin() }

console.log(profileData)
//allow updates on info
</script>


<template>
    <ClientOnly>

        <ProfileUpdateForm :existing-username="profileData.username"
            :pfp-url="profileData.pfpUrl ? profileData.pfpUrl : ''" :show-form="showForm" @close="handleShowForm">
        </ProfileUpdateForm>



        <div class="flex flex-col w-full gap-5 p-4 md:items-center">

            <ProfileHeader :name="profileData.username" :pfp-url="profileData.pfpUrl"></ProfileHeader>
            <button @click="handleShowForm"
                class="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-white bg-gray-500 rounded-2xl shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-200 border ">
                Edit Profile
            </button>

            <span class="text-xl font-semibold"> Reviews Made</span>
            <ReviewItem v-for="r in profileData.reviews" :review="r"></ReviewItem>


        </div>

    </ClientOnly>


</template>
