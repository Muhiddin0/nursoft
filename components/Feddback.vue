<template>
  <section class="feddback">
    <div class="container">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 data-aos="fade-up" class="text-3xl text-center">
          Why Newsletter-App? How to enjoy your feed?
        </h1>
        <b data-aos="fade-up" class="text-green-500 mt-6">Be ready for an amazing experience.</b>
      </div>

      <div  class="flex flex-col gap-6">
        <div class="flex gap-4 flex-wrap items-center justify-around w-full">
          <div data-aos="fade-right" class="card max-w-[269px] border-green-500">
            <h1
              style="border-left: 2px solid green; border-left-width: "
              class="lg:text-center px-3 text-xl font-bold"
            >
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
          <div data-aos="fade-left" class="card max-w-[269px] border-green-500">
            <h1
              style="border-left: 2px solid green; border-left-width: "
              class="lg:text-center px-3 text-xl font-bold"
            >
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
        </div>

        <div
          class="lg:order-none order-10 flex flex-wrap items-center justify-around gap-4"
        >
          <div data-aos="fade-right" class="card max-w-[269px] order-1 border-green-500">
            <h1
              style="border-left: 2px solid green; border-left-width: "
              class="lg:text-center px-3 text-xl font-bold"
            >
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
          <div
            data-aos="fade-up"
            class="p-5 w-[100%] lg:w-[33.3%] order-8 lg:order-2 flex-grow-0 flex justify-center items-center"
          >
            <img class="w-full md:w-[400px]" :src="rectangilImg" alt="" />
          </div>
          <div data-aos="fade-left"  class="card max-w-[269px] order-3 border-green-500">
            <h1
              style="border-left: 2px solid green; border-left-width: "
              class="lg:text-center px-3 text-xl font-bold"
            >
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 items-center justify-around w-full">
          <div data-aos="fade-right" class="card max-w-[269px] border-green-500">
            <h1
              style="border-left: 2px solid green; border-left-width: "
              class="lg:text-center px-3 text-xl font-bold"
            >
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
          <div data-aos="fade-left" class="card max-w-[269px] border-green-500">
            <h1
              style="border-left: 2px solid green; border-left-width: "
              class="lg:text-center px-3 text-xl font-bold"
            >
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import rectangilImg from "../assets/images/rectangill.svg";
export default {
    data(){
        return {
            rectangilImg
        }
    }
};
</script>

<style lang="scss" scoped>
</style>