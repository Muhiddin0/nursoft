<template>
    <section>
        <div class="container flex gap-5 flex-col items-center">

            <div class="title my-[70px] flex items-center flex-col">
                <h1 class="text-3xl text-center">Organize Sources</h1>
            </div>

            <div class="flex flex-wrap justify-around gap-5 gap-y-12 pb-5  max-w-[700px]">
                <NuxtLink to="settings/organize-sourse"
                    class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="material-symbols:settings-outline" />
                    <b>Organize Sources</b>
                </NuxtLink>
                <NuxtLink to="/settings/organize-labes"
                    class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="solar:layers-line-duotone" />
                    <b>Organize labes</b>
                </NuxtLink>
                <NuxtLink to="/settings/appearance"
                    class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="ion:grid-outline" />
                    <b>Appearance</b>
                </NuxtLink>
                <div class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="solar:share-linear" />
                    <b>Sharing</b>
                </div>
                <nuxtLink to="/settings/upgradepro"
                    class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="ri:award-line" />
                    <b>Upgrade Pro</b>
                </nuxtLink>
                <NuxtLink to="/settings/account"
                    class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="material-symbols:account-circle-full" />
                    <b>Account</b>
                </NuxtLink>
                <div class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="ph:currency-dollar" />
                    <b>Referal</b>
                </div>
                <div class="flex flex-col justify-center items-center gap-2 w-[157px] text-green-500">
                    <Icon size="60px" class="text-green-500" name="mdi:file-document" />
                    <b>Terms of use</b>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'settingsbar'
})
</script>

<style lang="scss" scoped></style>