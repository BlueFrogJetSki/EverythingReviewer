<template>
  <div>
  <div class="min-h-svh overflow-x-hidden">

    <Suspense>

      <AppHeader></AppHeader>
    </Suspense>
    <div class="">
      <slot />
    </div>

  </div>
  <AppFooter />
</div>
</template>

<script setup>

</script>