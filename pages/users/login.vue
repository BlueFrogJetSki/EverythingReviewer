<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
    // Handle form submission logic (e.g., authentication API call)
    console.log(`Email: ${email.value}, Password: ${password.value}`)
}

async function GoToSignUp() {
    await navigateTo('/users/signup');
}
</script>
<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 class="text-xl md:text-2xl font-bold text-center text-blue-950 mb-6">Login to UBC Party Finder &#127881;
            </h2>

            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" type="email" v-model="email" required
                        class="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter your email" />
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input id="password" type="password" v-model="password" required
                        class="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter your password" />
                </div>

                <button type="submit"
                    class="w-full py-3 bg-blue-950 text-white rounded-md font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Login
                </button>
            </form>

            <p class="mt-4 text-sm text-center">
                Don't have an account?
                <a @click="GoToSignUp" class="text-blue-600 hover:underline">Sign Up</a>
            </p>
        </div>
    </div>
</template>