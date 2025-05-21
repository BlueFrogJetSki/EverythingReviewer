<script setup lang="ts">
import { ClientOnly } from '#components';
import { ValidateJWT } from '~/services/AuthService/ValidateJWT';
import { getAppName } from '~/utils/GetMetaData';
function handleLogOut() {
    sessionStorage.removeItem('jwt')
    GoToHome()
    window.location.reload()
}

function handleCloseDrawerAfterClick(func: any) {
    handleDrawer()
    func()
}

const authenticatedRef = await ValidateJWT()

const isDrawerOpen = ref(false)

const handleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
}

const appName = getAppName()



</script>

<template>
    <header class="w-full h-20 md:h-auto flex items-center justify-between px-6 py-4 shadow-md ">
        <button @click="GoToHome">
            <div class="flex items-center ">
                <span class="text-base md:text-xl lg:text-2xl  font-bold text-gray-900 p-2">{{ appName }}</span>
                 <img src="../public/favicon.svg" alt="Logo" class="w-6 h-6 md:w-8 md:h-8" />
            </div>
        </button>
        <ClientOnly>
        <div v-if="!authenticatedRef" class="flex items-center space-x-4">
            <button @click="GoToLogin"
                class="px-2 md:px-4 py-2 font-bold text-sm md:text-lg text-gray-600 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Login
            </button>
            <button @click="GoToSignUp"
                class="px-2 md:px-4 py-2 text-sm md:text-lg font-bold text-gray-900 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Sign Up
            </button>
        </div>

        <div v-if="authenticatedRef" class="flex items-center space-x-4 ">
            <button @click="handleDrawer">
                <img src="../assets/burger-menu-svgrepo-com.svg" width="24" height="24">
            </button>

        </div>
    </ClientOnly>

    </header>
    <ClientOnly>
    <AppDrawer v-if="authenticatedRef" :open="isDrawerOpen" @close="handleDrawer">
        <div class="flex flex-col items-start">
            <button @click="handleCloseDrawerAfterClick(GoToProfile)"
                class="px-2 md:px-4 py-2 font-semibold text-md md:text-lg text-gray-800 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Profile
            </button>
            <button @click="handleCloseDrawerAfterClick(handleLogOut)"
                class="px-2 md:px-4 py-2 font-semibold text-md md:text-lg text-gray-800 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
                Log out
            </button>

        </div>
    </AppDrawer>
    </ClientOnly>
</template>

