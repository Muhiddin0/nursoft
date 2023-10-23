<template>
  <section>
    <div class="container min-h-[60vh]">
      <h1 data-aos="fade-up" class="title my-[50px] text-center text-[33px] text-green-500">
        Join 1000+ Happy Premium Users
      </h1>
      <div class="flex flex-wrap gap-4 justify-around">
        <div
          data-aos="fade-right"
          class="card flex gap-5 my-6 flex-col max-w-[345px]"
          :style="`background-image: url(${quote});`"
        >
          <b class="relative">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
            aperiam delicata est.
          </b>
          <div>
            <img class="float-left mr-3" :src="happyUserAvatar" alt="" />
            <b>Savannah Miles</b>
            <p>brand manager</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          class="card flex gap-5 my-6 flex-col max-w-[345px]"
          :style="`background-image: url(${quote});`"
        >
          <b class="relative">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
            aperiam delicata est.
          </b>
          <div>
            <img class="float-left mr-3" :src="happyUserAvatar" alt="" />
            <b>Savannah Miles</b>
            <p>brand manager</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          class="card flex gap-5 my-6 flex-col max-w-[345px]"
          :style="`background-image: url(${quote});`"
        >
          <b class="relative">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
            aperiam delicata est.
          </b>
          <div>
            <img class="float-left mr-3" :src="happyUserAvatar" alt="" />
            <b>Savannah Miles</b>
            <p>brand manager</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import happyUserAvatar from "../assets/images/HappyUserAvatar.svg";
import quote from "../assets/images/quote.svg";

export default {
  data() {
    return {
      happyUserAvatar: happyUserAvatar,
      quote,
    };
  },
};
</script>

<style scoped>
.card {
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
}
</style>