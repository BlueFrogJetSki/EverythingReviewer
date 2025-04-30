<template>
    <div class="md:w-1/2 review-item flex gap-4 border p-4 rounded shadow-sm mb-4 bg-white">
        <!-- <img :src="review.profileImage" alt="Profile" class="w-12 h-12 rounded-full object-cover" /> -->

        <div class=" flex gap-4 items-center w-full">

            <ProfilePfp :pfp-url="review.pfpUrl"/>
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