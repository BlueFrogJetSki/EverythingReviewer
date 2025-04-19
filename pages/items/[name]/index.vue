<script setup lang="ts">
import type { IReviewDTO } from '~/Interfaces/IReview'
import { fetchReview } from '~/services/ReviewService/fetchReview'

const route = useRoute()

const name = route.params.name as string

const resultRef = ref('')

const reviews =  await fetchReview(name as string, resultRef) as IReviewDTO[]

//fetch reviews done!
//fetch avg score
</script>

<template>


  <div class="flex flex-col w-full gap-5 p-4">
    <ReviewPageHeader :name="name"></ReviewPageHeader>
    <ReviewItem v-for="r in reviews" :review="r"></ReviewItem>
    <span class="text-xl text-gray-800" v-if="reviews == null || reviews.length == 0"> Be the first to review this item</span>


  </div>

</template>
