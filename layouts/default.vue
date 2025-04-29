<template>
  <div class="min-h-svh">

    <Suspense>

      <AppHeader></AppHeader>
    </Suspense>

    <slot />


  </div>
  <AppFooter />
</template>

<script setup>

</script>