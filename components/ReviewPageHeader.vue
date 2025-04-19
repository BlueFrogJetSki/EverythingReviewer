<template>
    <div class="w-full flex items-center justify-between px-6 py-4">
        <h2 class="text-5xl text-gray-800 font-bold ">{{ name.toString().toUpperCase() }}</h2>
        <p>meter</p>
        
    </div>
    <button @click="GoToCreate"
            class="px-2 md:px-4 py-2 text-sm md:text-lg font-semibold text-gray-800 bg-white/10 backdrop-blur-md rounded hover:bg-white/20 border border-white/30">
            Leave a review
        </button>
</template>

<script setup lang="ts">

const props = defineProps<{ name: string }>()
async function GoToCreate() {
    await navigateTo(`/items/${props.name}/create`);
}
</script>