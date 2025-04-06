<script setup lang="ts">
import { ref } from 'vue'
import { ValidatePassword } from '~/utils/ValidatePassword';

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

let emailError = ref('');
let passwordError = ref('');
let confirmPasswordError = ref('');

async function GoToLoginIn() {
    await navigateTo('/users/login');
}

const handleSubmit = () => {
    let passwordErrorMessage = ValidatePassword(password.value) 

    console.log(passwordErrorMessage);

    
    passwordError.value = passwordErrorMessage
    
    if(password.value != confirmPassword.value){
        confirmPasswordError.value = "looks like your password doesn't match"
    }else{
        confirmPasswordError.value = '';
    }

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
                        class="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 "
                        placeholder="Enter your email" />
            
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input id="password" type="password" v-model="password" required
                        class="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter your password" />
                        <p v-if="passwordError" class="text-red-500 text-xs mt-2">{{ passwordError }}</p>
                </div>
                

                <div class="mb-6">
                    <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm
                        Password</label>
                    <input id="confirm-password" type="password" v-model="confirmPassword" required
                        class="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter your password again" />
                        <p v-if="confirmPasswordError" class="text-red-500 text-xs mt-2">{{ confirmPasswordError }}</p>
                </div>

                <button type="submit"
                    class="w-full py-3 bg-blue-950 text-white rounded-md font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Sign Up
                </button>
            </form>

            <p class="mt-4 text-sm text-center">
                Already have an account?
                <a @click="GoToLoginIn" class="text-blue-600 hover:underline">Login</a>
            </p>
        </div>
    </div>
</template>


