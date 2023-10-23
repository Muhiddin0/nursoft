<template>
  <HeaderBar />
  <slot />

  <footer>
    <div class="footer-top">
      <div class="container flex lg:justify-start justify-start py-[40px] lg:gap-[100px] gap-4 sm:gap-6 flex-wrap">
        <ul class="lg:ml-[70px] ml-0 my-5">
          <li class="text-green-500">Get started</li>
          <li>Blog</li>
          <li>Site Map</li>
          <li>F.A.Q.</li>
        </ul>
        <ul class="ml-0 my-5 lg:ml-6">
          <li class="text-green-500">Get started</li>
          <li>Blog</li>
          <li>Site Map</li>
          <li>F.A.Q.</li>
        </ul>
        <ul class="ml-0 my-5 lg:ml-6">
          <li class="text-green-500">Get started</li>
          <li>Blog</li>
          <li>Site Map</li>
          <li>F.A.Q.</li>
        </ul>
        <ul class="ml-0 my-5 lg:ml-6">
          <li class="text-green-500">Get started</li>
          <li>Blog</li>
          <li>Site Map</li>
          <li>F.A.Q.</li>
        </ul>
        <p class="w-[100%]">
          ??? Data is a real-time snapshot *Data is delayed at least 15 minutes.
          Global Olives and Natural product, Market and Analysis.
        </p>
      </div>
    </div>
    <div class="bg-green-600">
      <div class="container flex flex-wrap justify-between items-center footer-bottom py-6 px-5">
        <div class="urls">
          <a href="" class="text-white">Privacy Policy /</a>
          <a href="" class="text-white">Personal Information /</a>
          <a href="" class="text-white">Terms of Service</a>
        </div>
        <div class="flex justify-center items-center w-[100%] lg:w-auto mt-6 logo-box">
          <sup class="text-[15px] sm:text-[27px] text-stone-300">2023</sup>
          <h1 class="text-[15px] sm:text-[27px] text-white text-4xl">
            NURSOFT <sup>uz</sup>
          </h1>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>