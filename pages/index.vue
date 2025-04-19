<script setup lang="ts">
const search = ref('')


async function GoToItems() {
  if (search.value === '') { return }
  await navigateTo(`/items/${search.value}`);
}




</script>
<template>
  <div>

    <main class="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center">
      <h1 class="text-3xl font-bold mb-4">Find what the public thinks about anything</h1>
      <SearchBar v-model="search" , :handle-search="GoToItems"></SearchBar>

    </main>
  </div>
</template>