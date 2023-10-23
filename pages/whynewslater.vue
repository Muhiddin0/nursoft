<template>
  <section>
    <div class="container grid-m justify-around!">
      <div data-aos="fade-up" class="info xl:justify-center">
        <h1 class="max-w-[600px]">With Newsletter you will:</h1>
        <b class="max-w-[190px]">With Newsletter you will:</b>
        <a class="btn bg-green-500 text-white mt-[60px]">How it Works</a>
      </div>
      <div class="img-box">
        <img data-aos="fade-up" class="max-w-[500px]" :src="whyHome" alt="" />
      </div>
    </div>
  </section>

  <Feddback />

  <section>
    <div class="container">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 data-aos="flip-left" class="text-3xl text-center max-w-[560px] font-bold">
          Our team created a special solution for your needs.
        </h1>
        <b data-aos="flip-left" class="text-green-500 mt-6 text-center max-w-[373px]">With Newsletter-App you will:</b>
      </div>
      <div class="flex flex-wrap items-center gap-6 justify-around">
        <div data-aos="flip-up" class="flex flex-col justify-center items-center gap-5 max-w-[227px]">
          <img class="h-[100px] w-[100px]" :src="spam" alt="" />
          <b class="text-3xl text-center">Kill The Spam</b>
          <p class="text-center">
            Get your own Newsletter email. Subscribe with one-click for the most
            relevant newsletters and avoid the spam.
          </p>
        </div>
        <div data-aos="flip-up" class="flex flex-col justify-center items-center gap-5 max-w-[227px]">
          <img class="h-[100px] w-[100px]" :src="time" alt="" />
          <b class="text-3xl text-center">Kill The Spam</b>
          <p class="text-center">
            Get your own Newsletter email. Subscribe with one-click for the most
            relevant newsletters and avoid the spam.
          </p>
        </div>
        <div data-aos="flip-up" class="flex flex-col justify-center items-center gap-5 max-w-[227px]">
          <img class="h-[100px] w-[100px]" :src="content" alt="" />
          <b class="text-3xl text-center">Kill The Spam</b>
          <p class="text-center">
            Get your own Newsletter email. Subscribe with one-click for the most
            relevant newsletters and avoid the spam.
          </p>
        </div>
        <div data-aos="flip-up" class="flex flex-col justify-center items-center gap-5 max-w-[227px]">
          <img class="h-[100px] w-[100px]" :src="skipAdds" alt="" />
          <b class="text-3xl text-center">Kill The Spam</b>
          <p class="text-center">
            Get your own Newsletter email. Subscribe with one-click for the most
            relevant newsletters and avoid the spam.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container flex justify-center items-center min-h-[60vh]">
      <div data-aos="flip-up"
        class="bg-[#F4F3F1] shadow-xl flex gap-[70px] py-[80px] px-[2em] rounded-lg justify-center items-center flex-col w-[100%]">
        <h1 class="text-3xl text-bold text-center max-w-[834px]">
          No ads and spam in this app. Take reading and sharing to the next
          level with Newsletter.
        </h1>
        <a href="" class="btn bg-white border-green-500 border-[2px]">HOW IT WORKS</a>
      </div>
    </div>
  </section>

  <HappyUsersCard />

  <section>
    <div class="container grid-m justify-around">
      <div class="info">
        <h1 data-aos="fade-right" class="max-w-[600px] font-[44px]">
          "Once you learn to read, you will be forever free"
        </h1>
        <b data-aos="fade-right" class="max-w-[190px]">Frederick Douglas</b>
      </div>
      <div class="img-box">
        <img data-aos="fade-left" class="max-w-[500px]" :src="builderHuman" alt="" />
      </div>
    </div>
  </section>

  <Adds />
</template>

<script>
import whyHome from "../assets/images/whyHome.svg";
import spam from "../assets/images/spam.svg";
import time from "../assets/images/time.svg";
import content from "../assets/images/content.svg";
import skipAdds from "../assets/images/skipAdds.svg";
import builderHuman from "../assets/images/builderHuman.svg";

export default {
  data() {
    return {
      whyHome,
      spam,
      time,
      content,
      skipAdds,
      builderHuman,
    };
  },
};
</script>

<style lang="scss" scoped></style>