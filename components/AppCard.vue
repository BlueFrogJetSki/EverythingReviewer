<template>
  <div class="size-60  rounded shadow-md bg-white/10 backdrop-blur-md text-blue-900 flex flex-col ">

    <img class="w-full h-24 rounded-md rounded-b-none object-cover shadow-md " :src="imgsrc" alt="">
    <div class="flex flex-col p-2">
      <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
      <p class="text-sm font-semibold ">{{ location }}</p>
      <p class="text-md font-semibold ">{{ date }}</p>
      <p class="text-md font-semibold ">{{ admission }}</p>
    </div>

  </div>
</template>

<script setup>

defineProps({
  title: String,
  location: String,
  date: String,
  imgsrc: String,
  location: String,
  admission: {
    type: String,
    default: "free"
  }
})
</script>