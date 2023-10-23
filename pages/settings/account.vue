<template>
    <section>
        <div class="mini-container">

            <!-- Accocunt Title -->
            <div class="title my-[70px] flex items-center flex-col">
                <h1 class="text-3xl text-center">
                    Manage Account
                </h1>
            </div>

            <div class="flex flex-wrap gap-4">

                <form class="flex flex-col gap-3 w-[100%] sm:w-[400px] flex-grow-[1]" action="">
                    
                    <div class="flex flex-wrap gap-3">
                        <label for="#first_name" class="relative flex flex-col gap-1 py-1">
                            <input placeholder="First name" class="ml-3" type="text">
                            <div class="bg-stone-200 w-[100%] h-1 rounded-md"></div>
                        </label>
                        <label for="#last_name" class="relative flex flex-col gap-1 py-1">
                            <input placeholder="Last name" type="text">
                            <div class="bg-stone-200 w-[100%] h-1 rounded-md"></div>
                        </label>
                    </div>
                        

                    <div class="flex gap-2">
                        <label for="#last_name" class="relative flex flex-col gap-1 py-1">
                            <input class="w-[100px]" placeholder="Month" type="text">
                            <div class="bg-stone-200 h-1 rounded-md"></div>
                        </label>
                        <label for="#last_name" class="relative flex flex-col gap-1 py-1">
                            <input class="w-[100px]" placeholder="Day" type="text">
                            <div class="bg-stone-200 h-1 rounded-md"></div>
                        </label>
                        <label for="#last_name" class="relative flex flex-col gap-1 py-1">
                            <input class="w-[100px]" placeholder="Year" type="text">
                            <div class="bg-stone-200 h-1 rounded-md"></div>
                        </label>
                    </div>

                    <div class="flex flex-wrap">
                        <select class="w-[100%]" name="" id="">
                            <option value="">Uzb</option>
                            <option value="">Uzb</option>
                            <option value="">Uzb</option>
                            <option value="">Uzb</option>
                            <option value="">Uzb</option>
                        </select>
                        <div class="bg-stone-200 w-[100%] h-1 rounded-md"></div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <label for="#last_name" class="relative flex flex-col gap-1 py-1  w-[100%]" >
                            <input class=" w-[100%]" placeholder="name@..." type="text">
                            <div class="bg-stone-200 w-[100%] h-1 rounded-md"></div>
                        </label>
                        <label for="#last_name" class="relative flex flex-col gap-1 py-1  w-[100%]" >
                            <input class=" w-[100%]" placeholder="My password" type="text">
                            <div class="bg-stone-200 w-[100%] h-1 rounded-md"></div>
                        </label>
                    </div>

                    <button class="self-start my-3">Delete My Account </button>
                </form>

                <div class="flex justify-center items-center flex-col flex-grow-[1]">
                    <div class="w-[140px] h-[140px] bg-green-500 rounded-full"></div>
                    <p class="mt-4">Your profile picture CHOOSE FILE</p>

                    <form action="" class="mt-5 w-[90%]">
                        <p class="text-[10px]">name@newsletter.io</p>
                        <b class="text-md">name@newsletter.io</b>
                    </form>
                    <div class="bg-stone-200 w-[100%] h-1 rounded-md"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    methods:{
        onChange(e){
            e.target.classList.add('active')
            let _p = e.target.previousElementSibling
            _p.classList.add('active')
        },
        offChange(e){
            e.target.classList.remove('remove')
            let _p = e.target.previousElementSibling
            if (e.target.value.length > 0) return
            _p.classList.remove('active')
        }
    },
    data(){
        return{

        }
    },
    setup(){
        definePageMeta({
            layout: 'settingsbar'
        })
    }
}

</script>

<style scoped>
*{
    box-sizing: border-box;
    outline: 0;
}

label p{
    top: 0;
    margin: 0;
    scale: 1;
    transition: 0.3s;
}
label p.active {
    top: -15px;
    margin: 0;
    scale: .8;
}
</style>