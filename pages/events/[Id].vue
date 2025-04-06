<template>
<h1>{{ Id }}</h1>

</template>

<script setup lang="ts">
const route = useRoute()

const Id = route.params.Id

</script>