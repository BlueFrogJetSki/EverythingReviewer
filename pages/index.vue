<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Latest Reviews',
  meta: [
    { name: 'description', content: 'Find or leave reviews about anything' },
    { property: 'og:title', content: 'Reviews For Everything' },
    { property: 'og:description', content: 'Find or leave reviews about anything' },
    { property: 'og:image', content: 'https://images-for-ubc-event-finder.s3.us-east-2.amazonaws.com/og-image.png' },
    { property: 'og:url', content: 'https://reviews4everything.com' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Reviews For Everything' },
    { name: 'twitter:description', content: 'Find or leave reviews about anything' },
    { name: 'twitter:image', content: 'https://example.com/image.jpg' },
  ]
})

const search = ref('')

async function GoToItems() {
  if (search.value === '') { return }
  await navigateTo(`/items/${search.value}`);

}




const title = "Latest Reviews"

</script>
<template>
  <div>

    <main class="flex flex-col items-center h-[calc(100vh-80px)] px-6 text-center">
      <div class="max-w-96 p-6">
        <h1 class="min-w-52 text-3xl font-semibold text-gray-950 mt-4 mb-4 ">Find reviews
          <TypedLine text=" about" :input="search" />
        </h1>
        <SearchBar v-model="search" :handle-search="GoToItems"></SearchBar>
      </div>
      <div class="p-6 w-screen h-screen">

        <ClientOnly>
          <template #fallback>
            <AppLoadingSpin />
          </template>
          <ReviewListDisplay :title="title"></ReviewListDisplay>
        </ClientOnly>



      </div>



    </main>
  </div>
</template>