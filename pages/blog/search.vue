<template>
  <section>
    <div class="container flex flex-col justify-center items-center">
      <h1 class="text-2xl text-green-500">How can we help you?</h1>

      <Search />

      <div class="w-[100%] sm:w-[800px] flex flex-col gap-12 my-4">

        <div class="card">
          <img class="max-w-[300px] max-h-[300px] float-left" :src="img" alt="">
          <div class="flex flex-col gap-4">
            <p>IN ALL, NEW FEATURE, WHAT'S NEW ON SEPTEMBER 17, 2020</p>
            <h1 class="text-xl"><b>Product Roadmap Software - what is this?</b></h1>
            <p>Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla. </p>
          </div>
        </div>

        <div class="card">
          <img class="max-w-[300px] max-h-[300px] float-left" :src="img" alt="">
          <div class="flex flex-col gap-4">
            <p>IN ALL, NEW FEATURE, WHAT'S NEW ON SEPTEMBER 17, 2020</p>
            <h1 class="text-xl"><b>Product Roadmap Software - what is this?</b></h1>
            <p>Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla. </p>
          </div>
        </div>

        <div class="card">
          <img class="max-w-[300px] max-h-[300px] float-left" :src="img" alt="">
          <div class="flex flex-col gap-4">
            <p>IN ALL, NEW FEATURE, WHAT'S NEW ON SEPTEMBER 17, 2020</p>
            <h1 class="text-xl"><b>Product Roadmap Software - what is this?</b></h1>
            <p>Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla. </p>
          </div>
        </div>

        <div class="card">
          <img class="max-w-[300px] max-h-[300px] float-left" :src="img" alt="">
          <div class="flex flex-col gap-4">
            <p>IN ALL, NEW FEATURE, WHAT'S NEW ON SEPTEMBER 17, 2020</p>
            <h1 class="text-xl"><b>Product Roadmap Software - what is this?</b></h1>
            <p>Lorem ipsum dolor sit amet, adhuc nulla. Lorem ipsum dolor sit amet, adhuc nulla. </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import img from '../../assets/images/whyHome.svg'
export default {
  data() {
    return {
      img
    }
  },
  mounted() {
    const q = this.$route.query.q
    console.log(q);
  }
};
</script>

<style lang="scss" scoped></style>