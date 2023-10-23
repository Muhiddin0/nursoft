<template>
    <header>
        <div class="container flex justify-between items-center">
            <Logotip />

            <div class="flex gap-2">
                <div class="w-[36px] h-[36px] rounded-full bg-green-500"></div>
                <p>CCN.com</p>
                <p>The Good Stuff</p>
            </div>

            <div class="flex gap-2">
                <button class="text-green-500">
                    <Icon name="material-symbols:notifications-outline" /> 
                    Add Notification
                </button>
                <button class="btn border-[2px] border-green-500 rounded-full">Unsubscribe</button>
            </div>
        </div>
    </header>

    <slot />
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>