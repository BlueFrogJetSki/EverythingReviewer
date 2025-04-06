<template>
    <div class="bg-white/10 backdrop-blur-md rounded shadow-md p-6 w-full max-w-md md:max-w-lg lg:max-w-2xl text-black ">
      <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-sm text-black/80">{{ content }}</p>
      <p class="text-sm text-black/80">{{ date }}</p>
      <p class="text-sm text-black/80">{{ admission }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    content: String,
    date: String,
    admission:{
        type:String,
        default:"free"
    }
  })
  </script>
  