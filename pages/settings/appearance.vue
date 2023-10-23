<template>
    <section>
        <div class="mini-container">
            <div class="title my-[70px] flex items-center flex-col">
                <h1 class="text-3xl text-center">
                    Appearance
                </h1>
            </div>

            <ul>
                <li class="my-3 flex gap-2 items-center"><b>Default Presentation</b></li>
                <li class="my-3 flex gap-2 items-center">
                    <button>
                        <Icon size="24px" name="ic:twotone-radio-button-checked" />
                    </button>
                    <b>Titles - Only view</b>
                </li>
                <li class="my-3 flex gap-2 items-center">
                    <button>
                        <Icon size="24px" name="ic:twotone-radio-button-unchecked" />
                    </button>
                    <b>Card View</b>
                </li>
                <li class="my-3 flex gap-2 items-center">
                    <button>
                        <Icon size="24px" name="ic:twotone-radio-button-unchecked" />
                    </button>
                    <b>Magazine View </b>
                </li>
            </ul>

            <ViewSettings />

        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'settingsbar'
})
</script>

<style lang="scss" scoped></style>