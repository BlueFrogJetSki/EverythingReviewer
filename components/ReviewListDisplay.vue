<script setup lang="ts">
import type { IReviewDTO } from '~/Interfaces/IReview';
import ReviewItem from './ReviewItem.vue';
import { fetchRecentReviews } from '~/services/ReviewService/fetchReview';



const reviews: IReviewDTO[] = await fetchRecentReviews(4)

console.log(reviews)


</script>

<template>
<div class="w-full grid md:grid-cols-2 gap-6">
    <ReviewItem v-for="r in reviews" :review="r"></ReviewItem>
    
</div>
</template>