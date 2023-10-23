<template>
  <section>
    <div class="container flex flex-wrap justify-around items-start gap-y-6 gap-x-10 bg-[#FAF9F7]">
      <h1 class="text-center w-[100%]">Select your plan</h1>

      <!-- free trail -->
      <div data-aos="fade-up" class="flex flex-wrap gap-5 justify-between">
        <div class="flex flex-col max-w-[300px] p-6 shadow-xl rounded-xl">
          <h1 class="border-b-[2px] border-b-green-500 pb-2 text-center text-[1.7em] font-bold">
            FREE TRIAL
          </h1>

          <div class="my-6">
            <p class="text-green-500 text-center text-[2.5em]"><sub>$</sub>0</p>
            <p class="text-center">7-day period</p>
          </div>

          <ul class="list">
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Up to 1,000 newsletters
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Own Newsletter email
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              One-click Unsubscribe
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Newsletters explorer
            </li>
          </ul>

          <b class="text-green-500 font-bold my-3 ml-4">READ LESS</b>

          <ul class="list">
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Create and manage own labels
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Share to Facebook, LinkedIn and Twitter
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Read Later
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Read History
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Feed customization
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Appearance options
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Different view modes
            </li>
          </ul>

          <NuxtLink to="/upgradepro" class="btn bg-green-500 text-white mt-[30px]">START FREE TRIAL</NuxtLink>
        </div>
      </div>

      <!-- BRONZE trail -->
      <div data-aos="fade-up" class="flex flex-wrap gap-5 justify-between">
        <div class="flex flex-col max-w-[300px] p-6 shadow-xl rounded-xl">
          <h1 class="border-b-[2px] border-b-green-500 pb-2 text-center text-[1.7em] font-bold">
            BRONZE
          </h1>

          <div class="my-6">
            <p class="text-green-500 text-center text-[2.5em]"><sub>$</sub>7</p>
            <p class="text-center">3-months period</p>
          </div>

          <ul class="list">
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Up to 1,000 newsletters
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Own Newsletter email
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              One-click Unsubscribe
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Newsletters explorer
            </li>
          </ul>
          <NuxtLink to="/upgradepro" class="btn bg-green-500 text-white mt-[30px]">START FREE TRIAL</NuxtLink>
        </div>
      </div>

      <!-- SILVER trail -->
      <div data-aos="fade-up" class="flex flex-wrap gap-5 justify-between">
        <div class="flex flex-col max-w-[300px] p-6 shadow-xl rounded-xl">
          <h1 class="border-b-[2px] border-b-green-500 pb-2 text-center text-[1.7em] font-bold">
            SILVER
          </h1>

          <div class="my-6">
            <p class="text-green-500 text-center text-[2.5em]"><sub>$</sub>12</p>
            <p class="text-center">6-months period</p>
            <b class="text-green-500 text-center">Premium Support</b>
          </div>

          <ul class="list">
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Up to 1,000 newsletters
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Own Newsletter email
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              One-click Unsubscribe
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Newsletters explorer
            </li>
          </ul>
          <NuxtLink to="/upgradepro" class="btn bg-green-500 text-white mt-[30px]">START FREE TRIAL</NuxtLink>
        </div>
      </div>


      <!-- GOLD trail -->
      <div data-aos="fade-up" class="flex flex-wrap gap-5 justify-between">
        <div class="flex flex-col max-w-[300px] p-6 shadow-xl rounded-xl">
          <h1 class="border-b-[2px] border-b-green-500 pb-2 text-center text-[1.7em] font-bold">
            SILVER
          </h1>

          <div class="my-6">
            <p class="text-green-500 text-center text-[2.5em]"><sub>$</sub>20</p>
            <p class="text-center">1-year period</p>
            <b class="text-green-500 text-center">Premium Support</b>
          </div>

          <ul class="list">
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Up to 1,000 newsletters
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Own Newsletter email
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              One-click Unsubscribe
            </li>
            <li class="text-sm li-list-item flex items-center gap-2 flex-wrap">
              Newsletters explorer
            </li>
          </ul>
          <NuxtLink to="/upgradepro" class="btn bg-green-500 text-white mt-[30px]">START FREE TRIAL</NuxtLink>
        </div>
      </div>

    </div>
  </section>

  <HappyUsersCard />

  <section>
    <div class="container flex justify-center items-center min-h-[50vh]">
      <div class="max-w-[673px]  flex flex-col justify-center items-center gap-6">
        <h1 class="text-3xl text-center">Enjoy reading newsletters</h1>
        <b class="text-center">Read valuable, high-quality content based on your intest and expertise</b>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.li-list-item {
  position: relative;
  padding-left: 10px;
}

.li-list-item::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  @apply bg-green-500;
}
</style>