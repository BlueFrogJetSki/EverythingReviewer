<script setup lang="ts">

const search = ref('')

async function GoToItems() {
  if (search.value === '') { return }
  await navigateTo(`/items/${search.value}`);

}






</script>
<template>
  <div>

    <main class="flex flex-col items-center justify-between h-[calc(100vh-80px)] px-6 text-center">
      <div class="p-6">
        <h1 class="min-w-52 text-3xl font-semibold text-gray-950 mt-4 mb-4 ">Find reviews
          <TypedLine text=" about" :input="search" />
        </h1>
        <SearchBar v-model="search" :handle-search="GoToItems"></SearchBar>
      </div>
      <div class="p-6 overflow-x-hidden overflow-y-auto">
        <h2 class="min-w-52 text-3xl font-semibold text-gray-950 mb-4 ">Recent Reviews</h2>
        <ClientOnly>
          <ReviewListDisplay></ReviewListDisplay>
        </ClientOnly>
      </div>



    </main>
  </div>
</template>