<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IReviewDTO } from '~/Interfaces/IReview'
import ReviewItem from './ReviewItem.vue'
import { fetchPaginatedReviews, fetchReviewCount } from '~/services/ReviewService/fetchReview'

const page = ref(1)
const limit = 15
const hasMorePages = ref(true)
const reviews = ref<IReviewDTO[]>([])
const loader = ref<HTMLElement | null>(null)
const props = defineProps({ title: String })

const totalReviewCount = await fetchReviewCount()

const handlePagination = async () => {
  if (!hasMorePages.value) return
  const nextPage = await fetchPaginatedReviews(page.value, limit)
  if (nextPage.length === 0) {
    hasMorePages.value = false
  } else {
    reviews.value.push(...nextPage)
    page.value++
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && hasMorePages.value) {
      handlePagination()
    }
  })

  if (loader.value) {
    observer.observe(loader.value)
  }
})
</script>


<template>
    <h2 class="min-w-52 text-3xl font-semibold text-gray-950">{{ props.title }}</h2>
    <span class="text-sm text-gray-500">({{ totalReviewCount }} reviews)</span>
    <div class="w-full grid md:grid-cols-2 gap-6">
        <ReviewItem v-for="r in reviews" :review="r" :clickable="true" :key="r.id"></ReviewItem>
        <div ref="loader" class="loader"><span class="text-sm font-semibold" v-if="hasMorePages">Loading more...</span></div>
    </div>
</template>