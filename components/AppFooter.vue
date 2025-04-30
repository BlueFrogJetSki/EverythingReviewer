<template>
  <footer class="bg-black text-white py-4 mt-10">
    <div class="container mx-auto text-center">
      <p>&copy; {{ year }} {{ appName }}. All rights reserved.</p>

    </div>
  </footer>
</template>

<script setup>
const appName = getAppName()
const year = new Date().getFullYear()
</script>

<style scoped>
/* Optional extra styles */
</style>