<template>
    <div class="card flex gap-6 flex-col justify-between bg-[#52575C] rounded-lg p-6 w-[168px] min-h-[188px]">
        <img width="19px" :src="img" alt="cdfsvdtbty">
        <b class="text-white">Morning Brew</b>
        <p class="text-stone-400">New York (CNN Business)It's been sv .</p>
        <a href="" class="text-orange-400"><b>Subscribe</b></a>
    </div>
</template>

<script>

import devImage from '../assets/images/devResourse.svg'
export default {
    data(){
        return {
            img:devImage
        }
    }
}

</script>

<style lang="scss" scoped>

</style>