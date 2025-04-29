<template>
    <div class="flex items-center gap-1">
      <span
        v-for="n in max"
        :key="n"
        class="cursor-pointer text-2xl"
        :class="n <= modelValue ? 'text-yellow-500' : 'text-gray-300'"
        @click="updateRating(n)"
      >
        ★
      </span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: { type: Number, required: true },
    max: { type: Number, default: 5 }
  })
  console.log(props.modelValue)
  const emit = defineEmits(['update:modelValue'])
  
  function updateRating(value) {
    emit('update:modelValue', value)
  }
  </script>