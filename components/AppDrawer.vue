<template>
    <transition name="slide">
        <div v-if="open" class="fixed top-0 right-0 w-64 md:w-80 h-full bg-white shadow-xl z-50 p-4 flex flex-col">
            <button @click="$emit('close')" class="self-end text-gray-500 hover:text-black">
                ✕
            </button>
            <slot />
        </div>
    </transition>

    <div v-if="open" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="$emit('close')" />

</template>


<script setup>
defineProps({
    open: Boolean
});
defineEmits(['close']);
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>