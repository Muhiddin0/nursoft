<template>
    <div class="w-[240px] my-12 flex flex-col gap-12">
        <div class="flex content-center justify-center items-center ">
            <p class="text-stone-400 text-lg mr-5 float-left">View <br> mode</p>
            <button class="active relative bg-stone-200 mx-1 w-[43px] h-[43px] rounded-[100px] ">
                <Icon name="ic:twotone-radio-button-checked" class="absolute bottom-0 right-0" />
            </button>
            <button class="active bg-stone-500 mx-1 w-[43px] h-[43px] rounded-[100px] "></button>
            <button class="active bg-stone-900 mx-1 w-[43px] h-[43px] rounded-[100px] "></button>
        </div>
        <div class="mt-6">
            <p class="text-stone-400 text-lg mr-5 block">Zoom</p>
            <div class="flex justify-between items-center">
                <button><b>smaller -</b></button>
                <b>100%</b>
                <button><b>larger +</b></button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>

</style>