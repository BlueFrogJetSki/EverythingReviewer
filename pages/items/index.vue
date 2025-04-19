<script setup lang="ts">

const review = {
  author: 'alex',
  comment: 'peak!!!',
  rating: 5,
  date: new Date(),
  profileImage: 'https://images-for-ubc-event-finder.s3.us-east-2.amazonaws.com/e6fa8be4-4d34-4249-b48c-61c7c26d86a9.jfif'
}
</script>

<template>

  <div class="w-full flex items-center justify-between px-6 py-4">
    <h2 class="text-5xl text-gray-800 font-bold ">Word</h2>
    <p>meter</p>
  </div>
  <div class="flex flex-col w-full gap-5 p-4">

    <ReviewItem :review="review"></ReviewItem>


  </div>

</template>
