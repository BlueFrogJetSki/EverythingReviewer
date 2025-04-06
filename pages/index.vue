<template>
    <div>
      
      <main class="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">Find events in the community</h1>
        <button
          class="px-4 py-2 text-md md:text-lg font-medium text-white bg-blue-600 backdrop-blur-md rounded hover:bg-blue-950 border border-white/30"
          @click="GoToEvents">
          Discover Now
        </button>
  
      </main>
    </div>
  </template>

<script setup lang="ts">

async function  GoToEvents() {
  await navigateTo('/events');
}


</script>
  