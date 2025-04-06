<template>
    <header class="w-full flex items-center justify-between px-6 py-4 bg-blue-950 shadow-md ">
        <div @click="GoToHome" class="text-base md:text-xl lg:text-2xl  font-bold text-white">
            UBC Party Finder &#127881;
        </div>
        <div class="flex items-center space-x-4">

            <button @click="GoToLogin"
                class="px-2 md:px-4 py-2 text-sm md:text-lg font-medium text-white bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Login
            </button>
            <button @click="GoToSignUp"
                class="px-2 md:px-4 py-2 text-sm md:text-lg font-medium text-white bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Sign Up
            </button>
        </div>
    </header>
</template>

<script setup>

async function GoToLogin() {
    await navigateTo('/users/login');
}
async function GoToSignUp() {
    await navigateTo('/users/signup');
}
async function GoToHome() {
    await navigateTo('/');
}


</script>