<template>
    <div ref="message" class="fixed z-[1000] p-4 shadow-lg bg-white bottom-2 right-2 w-[300px] pt-2 rounded-md">
        <button class="absolute top-[0] left-[0] translate-x-[-12px] translate-y-[-12px] bg-white rounded-full">
            <Icon size="24px" name="mdi:close-circle" />
        </button>
        <p class="whitespace-nowrap">{{ props.message }}</p>
        <div id="message-loader"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['message'])
const message = ref(null)

setTimeout(() => {
    message.value?.classList.add('hidden')
}, 1000 *3);

</script>

<style scoped>

#message-loader {
    width: 0;
    height: 2px;
    @apply bg-green-500;
    animation: loader 3s 1 linear;
}
@keyframes loader {
    0%{
        width: 100%;
    }
    100%{
        width: 0;
    }
}

</style>