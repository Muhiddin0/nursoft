<template>
  <section class="home">
    <div class="container grid-m justify-around!">
      <div data-aos="fade-right" class="info max-w-[400px]">
        <h1>
          Bring back the joy of
          reading newsletters
        </h1>
        <b>Discover, subscribe and manage all <br />
          your email newsletters in one place.</b>
        <a class="btn bg-green-500 text-white mt-[60px]">TRY FOR FREE</a>
      </div>
      <div data-aos="fade-left" class="img-box">
        <img :src="homeImg" alt="" />
      </div>
    </div>
  </section>

  <Feddback />

  <section class="question">
    <div class="container flex items-center min-h-[60vh]">
      <div class="ml-0 lg:ml-[100px] w-full sm:w-[50%] flex flex-col gap-5">
        <h1 data-aos="fade-down-right" class="text-3xl font-bold sm:text-start text-center">
          WHY NEWSLETTER-APP?
        </h1>
        <p data-aos="fade-right" class="sm:text-start text-center">
          Newsletter-App is a brand new application for newsletters reading.
          With Newsletter-App, you will have the chance to bring back the joy of
          newsletter reading. There are no ads, no spam emails and…
        </p>
        <a data-aos="fade-up" href="" class="btn self-center my-6 bg-green-500 text-white sm:self-start">READ MORE</a>
      </div>
    </div>
  </section>

  <section class="bg-orange-200 py-6">
    <div class="container flex flex-wrap items-center justify-around gap-6">
      <MiniAddsCard />
      <MiniAddsCard />
      <MiniAddsCard />
    </div>
  </section>

  <section>
    <div class="container">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 data-aos="flip-left" class="text-3xl text-center">Enjoy reading newsletters</h1>
        <b data-aos="flip-left" class="text-green-500 mt-6 text-center max-w-[373px]">Read valuable, high-quality content
          based on your intest and
          expertise.</b>
      </div>
    </div>
  </section>

  <HappyUsersCard />

  <Adds />
</template>

<script>
import homeImg from "../assets/images/home.svg";

export default {
  data() {
    return {
      homeImg,
    };
  },
  beforeCreate() {
    console.log('salom');
  }
};
</script>

<style lang="scss" scoped></style>