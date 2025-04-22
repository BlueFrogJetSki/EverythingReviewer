<template>
    <header class="w-full h-20 md:h-auto flex items-center justify-between px-6 py-4 shadow-md ">
        <button @click="GoToHome">
            <div class="text-base md:text-xl lg:text-2xl  font-bold text-gray-900">
                Public Reivews &#128128;
            </div>
        </button>

        <div v-if="!validated" class="flex items-center space-x-4">
            <button @click="GoToLogin"
                class="px-2 md:px-4 py-2 font-bold text-sm md:text-lg text-gray-600 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Login
            </button>
            <button @click="GoToSignUp"
                class="px-2 md:px-4 py-2 text-sm md:text-lg font-bold text-gray-900 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Sign Up
            </button>
        </div>

        <div v-if="validated" class="flex items-center space-x-4 ">
            <button @click="handleDrawer">
                <img src="../assets/burger-menu-svgrepo-com.svg" width="24" height="24">
            </button>

        </div>

       
    </header>
    <AppDrawer v-if="validated" :open="isDrawerOpen" @close="handleDrawer" >
        <div class="flex items-center space-x-4">
            <button @click="handleLogOut"
                class="px-2 md:px-4 py-2 font-semibold text-sm md:text-lg text-gray-800 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Log out
            </button>
            
        </div>
    </AppDrawer>
</template>

<script setup>
import { ValidateJWT } from '~/services/AuthService/ValidateJWT';

function handleLogOut() {
    sessionStorage.removeItem('jwt')
    window.location.reload()
}

const validated = await ValidateJWT()

const isDrawerOpen = ref(false)

const handleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}






</script>