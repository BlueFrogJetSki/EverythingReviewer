<template>
    <header class="w-full flex items-center justify-between px-6 py-4 shadow-md ">
        <button @click="GoToHome">
            <div class="text-base md:text-xl lg:text-2xl  font-bold text-gray-900">
                Public Reivews &#127881;
            </div>
        </button>
        <div class="flex items-center space-x-4">
            <button @click="GoToLogin"
                class="px-2 md:px-4 py-2 font-bold text-sm md:text-lg text-gray-600 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Login
            </button>
            <button @click="GoToSignUp"
                class="px-2 md:px-4 py-2 text-sm md:text-lg font-bold text-gray-900 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
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
    await navigateTo('/', { force: true });
    window.location.reload();
}


</script>