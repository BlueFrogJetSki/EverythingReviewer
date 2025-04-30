<template>
  <div class="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white">
    <input type="text" :placeholder="placeholder" class="w-full outline-none" v-model="search"
      @input="$emit('update:modelValue', search)" @keyup.enter="handleSearch" />
    <button @click="handleSearch">
      <svg class="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: 'Search...'
  },
  handleSearch: {
    type: Function as PropType<() => void>,
    required: true
  }
})
const search = ref(props.modelValue)

watch(() => props.modelValue, val => (search.value = val))
</script>