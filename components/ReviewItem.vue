<template>
    <div class="md:w-1/2 review-item flex gap-4 border p-4 rounded shadow-sm mb-4 bg-white">
        <!-- <img :src="review.profileImage" alt="Profile" class="w-12 h-12 rounded-full object-cover" /> -->

        <div class=" flex gap-4 items-center w-full">

            <img v-if="review.pfpUrl" :src="review.pfpUrl" alt="Profile Picture"
                class="min-w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm">

            <svg v-else viewBox="0 0 24 24" fill="currentColor"
                class="min-w-12 h-12 text-gray-300 rounded-full border border-gray-300 shadow-sm">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>

            <div class="flex flex-col flex-grow">
                <div class="flex justify-between items-center mb-1">
                    <h3 class="font-semibold text-lg">{{ review.username }}</h3>
                    <Rating :modelValue="review.rating" />
                </div>
                <p class="text-gray-700 break-all overflow-hidden text-ellipsis line-clamp-3">
                    {{ review.text }}
                </p>

                <p class="text-sm text-gray-500 mt-2">{{ formatDate(review.createdAt) }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import Rating from './Rating.vue';


//TODO add pagination
//TODO make text extensible 
const props = defineProps({
    review: {
        type: Object,
        default: () => ({
            pfpUrl: '../assets/burger-menu-svgrepo-com.svg',
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