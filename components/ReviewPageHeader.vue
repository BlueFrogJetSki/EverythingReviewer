<template>
    <div class="w-full flex flex-col items-center justify-between px-6 py-4">
        <h2 class="text-5xl text-gray-800 font-bold ">{{ name.toString().toUpperCase() }}</h2>
        <ClientOnly>
            <Rating :model-value="avgRating"></Rating>
        </ClientOnly>

        <button @click="GoToCreate"
            class="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-white bg-gray-500 rounded-2xl shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-200 border ">
            Review
        </button>



    </div>

</template>

<script setup lang="ts">
import { ClientOnly } from '#components';


const props = defineProps<{ name: string, avgRating: number }>()


async function GoToCreate() {
    await navigateTo(`/items/${props.name}/create`);
}
</script>