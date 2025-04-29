<template>
    <span>{{ textTypedRef }} {{ input }}<span class="font-thin"> {{ showCursorRef ? '_' : '\u00A0' }}</span></span>
</template>
<script setup lang="ts">


const props = defineProps({
    text: { type: String, required: true },
    input: String
})

const textTypedRef = ref('')
const showCursorRef = ref(false)
const typingDelay = 60
const showText = () => {
    const text = props.text
    for (let i = 0; i < text.length; i++) {

        setTimeout(() => {
            textTypedRef.value += text[i];
        }, typingDelay * i);


    }
}

const blinkCursor = () => {
    cursorInterval = setInterval(() => {
        showCursorRef.value = !showCursorRef.value
    }, 500)
}


let cursorInterval: NodeJS.Timeout

onMounted(() => {
    showText()
    blinkCursor()
})

onUnmounted(() => {
    clearInterval(cursorInterval)
})
</script>