<template>
    <div class="review-item flex gap-4 border p-4 rounded shadow-sm mb-4 bg-white" @click="handleClick ">
        <div class=" flex gap-4 items-center w-full">

            <ProfilePfp :pfp-url="review.pfpUrl"/>
            <div class="flex flex-col flex-grow ">
                <div class="flex justify-between items-center mb-1">
                    <h3 class="font-semibold text-lg">{{ review.username }}</h3>
                    
                </div>
                <Rating :modelValue="review.rating" />
                <p class="text-gray-700 break-all overflow-hidden text-ellipsis line-clamp-3 text-left">
                    {{ review.text }}
                </p>

                <p class="text-sm text-gray-500 mt-2 text-left">{{ formatDate(review.createdAt) }}</p>
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
            id:'',
            pfpUrl: '../assets/burger-menu-svgrepo-com.svg',
            username: '',
            text: '',
            rating: 0,
            createdAt: '',
            item:''
        })
    },
    clickable: {
        type: Boolean,
        default: false,
    }
})

console.log(props.clickable)


function formatDate(date) {
    if (date == '') return;
    return new Date(date).toLocaleDateString()
}

const handleClick = () => {
    if(!props.clickable) return;
    console.log("clicked")
    GoToItems(props.review.item)
}
</script>