<template>
  <section>
    <div class="container grid-m justify-around!">
      <div class="info max-w-[400px]">
        <h1 class="">
          A step-by-step plan to get initial traction for SaaS products
        </h1>
        <a class="btn bg-green-500 text-white mt-[60px]">Keep reading</a>
      </div>
      <div class="img-box">
        <img :src="blog" alt="" />
      </div>
    </div>
  </section>

  <section>
    <div class="container flex flex-wrap justify-around gap-y-6">
      <div
        class="flex flex-col w-[100%] lg:max-w-[372px] items-center lg:items-start topic-of-weak"
      >
        <h1 class="text-green-500 text-xl font-bold my-3 text-center lg:text-start">Topic of the week</h1>

        <div class="max-w-[372px] relative my-2">
          <img class="w-[100%] h-auto" :src="topic" alt="" />
          <h1 class="my-3 text-center lg:text-start">
            <b class="text-2xl">A step-by-step plan to get initial traction for SaaS products</b>
          </h1>
          <p class="text-center lg:text-start">
            Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet,
            adhuc nulla definiebas mei ad.
          </p>
        </div>

        <div class="max-w-[372px] relative my-6">
          <img class="w-[100%] h-auto" :src="topic" alt="" />
          <h1 class="my-3 text-center lg:text-start">
            <b class="text-2xl">A step-by-step plan to get initial traction for SaaS products</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet,
            adhuc nulla definiebas mei ad.
          </p>
        </div>

      </div>
      <div
        class="flex flex-col w-[100%] lg:max-w-[372px] items-center lg:items-start  tips-tricks"
      >
        <div>
          <h1 class="text-green-500 text-xl font-bold my-3 text-center lg:text-start">
            Topic of the week
          </h1>

          <div class="max-w-[372px] my-[10px]">
            <h1 class="text-2xl text-center lg:text-start"><b>New in Newsletter</b></h1>
            <p class="my-4 text-center lg:text-start">Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad.</p>
          </div>
          
          <div class="max-w-[372px] my-[60px]">
            <h1 class="text-2xl text-center lg:text-start"><b>5 tips and tricks for the ultimate newsletter reading experience</b></h1>
            <p class="my-4 text-center lg:text-start">Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad.</p>
          </div>
          
          <div class="max-w-[372px] my-[60px]">
            <h1 class="text-2xl text-center lg:text-start"><b>Meet Liz Adams - the blogger who knows that her time is her asset</b></h1>
            <p class="my-4 text-center lg:text-start">Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad.</p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blog from "../assets/images/blog.svg";
import topic from "../assets/images/topic.svg";
export default {
  data() {
    return {
      blog,
      topic,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>