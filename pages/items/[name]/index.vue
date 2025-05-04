<script setup lang="ts">
import type { IReviewDTO } from '~/Interfaces/IReview'
import { fetchReview } from '~/services/ReviewService/fetchReview'


const route = useRoute()

const name = route.params.name as string

const resultRef = ref('')
const avgRatingRef = ref(0);

const calculateAvgRating = (reviews: IReviewDTO[] | null) => {
  if (reviews == null) {
    return 0;
  } else {
    let result = 0;
    reviews.forEach(r => {
      result += r.rating
    });

    return Math.round(result / reviews.length)
  }
}

let reviews: IReviewDTO[] | null = null
try {
  reviews = await fetchReview(name as string, resultRef) as IReviewDTO[]
  reviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
} catch (error) {
  resultRef.value = "Server Error"
}

avgRatingRef.value = calculateAvgRating(reviews)

console.log(avgRatingRef.value)



//fetch reviews done!
//fetch avg score
</script>

<template>


  <div class="flex flex-col w-full gap-5 p-4 md:items-center">
    <ReviewPageHeader :name="name" :avg-rating="avgRatingRef" :count="reviews? reviews.length:0"></ReviewPageHeader>
    <ClientOnly>
      <div class="w-full md:w-1/2">
        <ReviewItem v-if="reviews != null" v-for="r in reviews" :review="r" :key="r.id"></ReviewItem>
      </div>

      <div class=" flex justify-center"><span class="text-xl text-gray-800 font-semibold "
          v-if="reviews != null && reviews.length == 0"> Be the first to review this
          item &#9757;</span>
      </div>



      <span class="text-5xl text-gray-800" v-if="reviews == null">Server Error :(</span>
    </ClientOnly>


  </div>

</template>
