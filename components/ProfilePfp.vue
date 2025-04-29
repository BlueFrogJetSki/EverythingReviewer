<template>
    <img v-if="props.pfpUrl" :src="props.pfpUrl" alt="Profile Picture"
        class="max-w-20 max-h-20 aspect-square rounded-full object-cover border border-gray-300 shadow-sm">

    <svg v-else viewBox="0 0 24 24" fill="currentColor"
        class="min-w-20 h-20 text-gray-300 rounded-full border border-gray-300 shadow-sm">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
</template>

<script setup lang="ts">
const props = defineProps({
    pfpUrl:String,
})
</script>