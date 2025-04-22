<template>
    <div class="review-item flex gap-4 border p-4 rounded shadow-sm mb-4 bg-white">
        <!-- <img :src="review.profileImage" alt="Profile" class="w-12 h-12 rounded-full object-cover" /> -->

        <div class="flex gap-4 items-center">
            <img :src="review.profilePictureUrl" alt="Profile Picture"
                class="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm">

            <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                    <h3 class="font-semibold text-lg">{{ review.username }}</h3>
                    <span class="text-yellow-500">{{ '★'.repeat(review.rating) }}</span>
                </div>
                <p class="text-gray-700">{{ review.text }}</p>
                <p class="text-sm text-gray-500 mt-2">{{ formatDate(review.createdAt) }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    review: {
        type: Object,
        required: true,
        default: () => ({
            profilePictureUrl:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            username: '',
            text: '',
            rating: 0,
            createdAt: '',
        })
    }
})

function formatDate(date) {
    if (date == '') return;
    return new Date(date).toLocaleDateString()
}
</script>