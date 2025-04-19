<template>
    <div class="review-item flex gap-4 border p-4 rounded shadow-sm mb-4 bg-white">
        <!-- <img :src="review.profileImage" alt="Profile" class="w-12 h-12 rounded-full object-cover" /> -->

        <div class="flex-1">
            <div class="flex justify-between items-center mb-1">
                <h3 class="font-semibold text-lg">{{ review.username }}</h3>
                <span class="text-yellow-500">{{ '★'.repeat(review.rating) }}</span>
            </div>
            <p class="text-gray-700">{{ review.comment }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ formatDate(review.createdAt) }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    review: {
        type: Object,
        required: true,
        default: () => ({
            username: 'alex',
            text: 'peak!!!',
            rating: 5,
            createdAt: "2025-04-19T03:51:39.685185+00:00",
        })
    }
})

function formatDate(date) {
    return new Date(date).toLocaleDateString()
}
</script>