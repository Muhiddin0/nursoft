<template>
    <section>
        <div class="mini-container">
            <div class="title my-[70px] flex items-center flex-col">
                <h1 class="text-3xl text-center">Organize Sources</h1>
            </div>

            <div class="flex flex-wrap gap-3">
                <NuxtLink class="text-green-500 nav-btn active" to="#">Terms of use</NuxtLink>
                <NuxtLink class="text-green-500 nav-btn" to="#">Privacy policy</NuxtLink>
                <NuxtLink class="text-green-500 nav-btn" to="#">Privacy and Personal Data</NuxtLink>
            </div>
            
            <div class="flex flex-col gap-5 my-6">
                <div class="flex flex-col">
                    <b>1. Use of the Service</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maiores aperiam aliquam neque, dolores magni, itaque, nulla nisi numquam et vero quaerat ullam modi libero architecto impedit molestias illo! Quidem.</p>
                </div>
                <div class="flex flex-col">
                    <b>1. Use of the Service</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maiores aperiam aliquam neque, dolores magni, itaque, nulla nisi numquam et vero quaerat ullam modi libero architecto impedit molestias illo! Quidem.</p>
                </div>
                <div class="flex flex-col">
                    <b>1. Use of the Service</b>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eaque distinctio quae enim nisi dolore, voluptatem reiciendis molestias at blanditiis eius aut repellendus vel? Vitae, distinctio obcaecati ut rem expedita quas quo repellat veritatis voluptas reprehenderit sint dolores perferendis id beatae numquam atque nisi a. Laborum, vel eius! Quisquam, doloremque! Molestiae dolore fugiat qui est esse alias quia modi, consequatur, accusantium excepturi quis aperiam vel, ratione corporis tempora illum? Facilis sed iusto voluptates iste, nam eveniet inventore veniam repellendus vel quis dignissimos eaque, architecto quae! Facilis quo dolores vitae aperiam at nesciunt corrupti, delectus, quod amet, quos nostrum! Natus, sit.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-btn {
    position: relative;
}
.nav-btn.active::before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    @apply bg-green-500;
    border-radius: 10px;
}
</style>