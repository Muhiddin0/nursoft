<template>
  <section>
    <div class="container grid-m">
      <div data-aos="fade-right" class="info">
        <h1 class="max-w-[588px]">How Newsletter-App works?</h1>
        <b class="max-w-[450px]">Learn how to discover, subscribe and manage all newsletters in one
          place.</b>
        <a class="btn bg-green-500 text-white mt-[60px]">TRY FOR FREE</a>
      </div>
      <div data-aos="fade-left" class="img-box">
        <img class="max-w-[500px]" :src="howtowork" alt="how to work img" />
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 data-aos="fade-up" class="text-3xl text-center">
          Why Newsletter-App? How to enjoy your feed?
        </h1>
        <b data-aos="fade-up" class="text-green-500 mt-6">Be ready for an amazing experience.</b>
      </div>

      <div class="flex flex-col gap-6 mt-6">
        <div class="flex gap-4 flex-wrap items-center justify-around w-full">
          <div data-aos="fade-up" class="card max-w-[269px] border-green-500">
            <h1 style="border-left: 2px solid green; border-left-width: " class="lg:text-center px-3 text-xl font-bold">
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
          <div data-aos="fade-up" class="card max-w-[269px] border-green-500">
            <h1 style="border-left: 2px solid green; border-left-width: " class="lg:text-center px-3 text-xl font-bold">
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
          <div data-aos="fade-up" class="card max-w-[269px] border-green-500">
            <h1 style="border-left: 2px solid green; border-left-width: " class="lg:text-center px-3 text-xl font-bold">
              Kill The Spam
            </h1>
            <p class="px-3">
              Use Newsletter email to subscribe to newsletters. Win the battle
              against spam. Earn more time for a joyful reading.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" class="flex justify-center mt-[100px] img-box">
          <img :src="starterHuman" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="question mt-[150px]">
    <div class="container flex flex-wrap lg:flex-nowrap items-center gap-5 min-h-[60vh]">
      <div class="ml-0 lg:ml-[100px] w-full lg:w-[50%] flex flex-col gap-5">
        <h1 data-aos="fade-right" class="text-3xl font-bold lg:text-start text-center">
          WHY NEWSLETTER-APP?
        </h1>
        <p data-aos="fade-right" class="lg:text-start text-center">
          Newsletter-App is a brand new application for newsletters reading.
          With Newsletter-App, you will have the chance to bring back the joy of
          newsletter reading. There are no ads, no spam emails and…
        </p>
        <a data-aos="fade-right" href="" class="btn self-center lg:self-start my-6 bg-green-500 text-white">READ MORE</a>
      </div>

      <div class="w-full lg:w-[50%] img-box">
        <img data-aos="fade-left" :src="productView" alt="" />
      </div>
    </div>
  </section>

  <section class="py-[30px]">
    <div class="container flex-col md:flex-row gap-9 flex justify-around items-center">
      <div class="img-box">
        <img data-aos="fade-right" class="w-[300px] sm:w-[500px]" :src="userMode" alt="how to work img" />
      </div>
      <div class="md:text-2xl">
        <ul>
          <li data-aos="fade-left" class="my-3">
            <Icon name="ic:baseline-check" />
            <b class="ml-3">List View</b>
          </li>
          <li data-aos="fade-left" class="my-3">
            <Icon name="ic:baseline-check" />
            <b class="ml-3">Card View</b>
          </li>
          <li data-aos="fade-left" class="my-3">
            <Icon name="ic:baseline-check" />
            <b class="ml-3">Magazine View</b>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="py-[30px]">
    <div class="container grid-m">
      <div class="info">
        <h1 data-aos="fade-right" class="max-w-[588px]">How Newsletter-App works?</h1>
        <b data-aos="fade-right" class="max-w-[450px]">Learn how to discover, subscribe and manage all newsletters in one
          place.</b>
        <a data-aos="fade-right" class="btn bg-green-500 text-white mt-[60px]">TRY FOR FREE</a>
      </div>
      <div data-aos="fade-left" class="img-box">
        <img class="max-w-[300px]" :src="sircule" alt="how to work img" />
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 data-aos="fade-up" class="text-3xl text-center">
          Why Newsletter-App? How to enjoy your feed?
        </h1>
        <b data-aos="fade-up" class="text-green-500 mt-6">Be ready for an amazing experience.</b>
      </div>

      <div class="grid-m">
        <div class="img-box">
          <img data-aos="fade-right" class="max-w-[500px]" :src="exprerts" alt="how to work img" />
        </div>
        <div class="info">
          <b data-aos="fade-left" class="text-3xl font-bold">Meet the experts!</b>
          <p data-aos="fade-left" class="max-w-[390px]">
            Don’t miss the chance to chat with top experts, bloggers and digital <br><br>
            ninjas. Invite all your friends and colleagues to join us and enjoy <br><br>
            this unique experience. Be a valuable member of our Letterbox
            community.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Adds />
</template>

<script>
import howtowork from "../assets/images/howtowork.svg";
import starterHuman from "../assets/images/starterHuman.svg";
import productView from "../assets/images/productView.svg";
import userMode from "../assets/images/userMode.svg";
import sircule from "../assets/images/loop.png";
import exprerts from "../assets/images/exprerts.svg";

export default {
  data() {
    return {
      howtowork,
      starterHuman,
      productView,
      userMode,
      sircule,
      exprerts,
    };
  },
};
</script>

<style lang="scss" scoped></style>