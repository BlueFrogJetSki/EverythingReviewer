<template>
    <div class="w-full flex flex-col items-center justify-between px-6 py-4 gap-2 md:gap-4">

        <ProfilePfp :pfpUrl="props.pfpUrl || ''"></ProfilePfp>
        <h2 class="text-3xl md:text-5xl text-gray-800 font-bold text-wrap break-all ">{{ name.toString() }}</h2>

       

    </div>

</template>

<script setup lang="ts">

const props = defineProps<{ name: string, pfpUrl: string | null }>()

</script>