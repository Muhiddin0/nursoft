<template>
  <main class="flex">
    <section ref="sidebar"
      class="sidebar  overflow-auto absolute lg:relative z-10 bg-[#F4F3F1] w-[100%] sm:w-[350px] h-[100vh] transition-all">
      <div class="flex justify-between items-center min-h-[84px] px-4">
        <Logotip />
        <button @click="sidebarToggler" class="flex sm:hidden">
          <Icon size="24px" name="ic:twotone-menu" />
        </button>
      </div>

      <div class="pr-3">
        <div>
          <div class="flex justify-between px-4 my-2">
            <b class="font-bold text-green-500">MY LABELS</b>
            <div class="flex gap-2">
              <button>
                <Icon size="24px" class="text-green-500" name="material-symbols:add-circle-outline" />
              </button>
              <NuxtLink to="/settings">
                <Icon size="24px" class="text-green-500" name="material-symbols:settings-suggest" />
              </NuxtLink>

              <button class="transition-all" @click="(e) => toggler(e, 'mylabes')">
                <Icon size="24px" class="text-green-500" name="ic:baseline-keyboard-arrow-down" />
              </button>
            </div>
          </div>
          <div ref="mylabes" class="hidden my-2">
            <SidebarItems />
          </div>

          <div class="flex justify-between px-4 my-2">
            <b class="font-bold text-green-500">Read Laters</b>
            <div class="flex gap-2">
              <button class="transition-all" @click="(e) => toggler(e, 'readlaters')">
                <Icon size="24px" class="text-green-500" name="ic:outline-bookmark-border" />
              </button>
              <button class="transition-all" @click="(e) => toggler(e, 'readlaters')">
                <Icon size="24px" class="text-green-500" name="ic:baseline-keyboard-arrow-down" />
              </button>
            </div>
          </div>
          <div ref="readlaters" class="hidden my-2">
            <SidebarItems />
            <SidebarItems />
            <SidebarItems />
            <SidebarItems />
          </div>

          <div class="flex justify-between px-4 my-2">
            <b class="font-bold text-green-500">Read Laters</b>
            <div class="flex gap-2">
              <button class="transition-all" @click="(e) => toggler(e, 'readlaters')">
                <Icon size="24px" class="text-green-500" name="ep:reading" />
              </button>
              <button class="transition-all" @click="(e) => toggler(e, 'readhistory')">
                <Icon size="24px" class="text-green-500" name="ic:baseline-keyboard-arrow-down" />
              </button>
            </div>
          </div>
          <div ref="readhistory" class="hidden my-2">
            <SidebarItems />
            <SidebarItems />
            <SidebarItems />
            <SidebarItems />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 px-4 mt-6">
        <a class="text-lg font-bold hover:text-green-500 transition-all" href="/">Feeds</a>
        <a class="text-lg font-bold hover:text-green-500 transition-all" href="/">Feeds</a>
        <a class="text-lg font-bold hover:text-green-500 transition-all" href="/">Feeds</a>
        <a class="text-lg font-bold hover:text-green-500 transition-all" href="/">Feeds</a>
        <a class="text-lg font-bold hover:text-green-500 transition-all" href="/">Feeds</a>
      </div>
    </section>

    <section class="body border-[1px] flex-grow-[1] border-red-500 h-[100vh] overflow-auto">
      <header>
        <div class="mini-container flex flex-wrap justify-between items-center min-h-[84px]">
          <div class="flex lg:hidden flex-wrap justify-between items-center w-[100%] min-h-[40px]">
            <Logotip />
            <button @click="sidebarToggler">
              <Icon size="24px" name="ic:twotone-menu" />
            </button>
          </div>
          <form class="flex items-center border-b-[2px] border-green-500 w-[400px] mt-6">
            <input class="border-0 outline-0 flex-grow-[1]" placeholder="Search by topic, website, or RSS link"
              type="text" />
            <Icon name="ic:baseline-search" />
          </form>

          <div class="flex gap-1 justify-center items-center">
            <a href="">name@newsletter.io</a>
            <Icon name="bx:copy" />

            <div
              class="flex justify-center items-center w-[26px] h-[26px] ml-3 rounded-full bg-green-500 text-white text-[10px]">
              mk
            </div>
          </div>
        </div>
      </header>

      <slot />
    </section>
  </main>
</template>

  
<script>
import EuroNewsLogo from "../assets/images/EuroNewsLogo.svg";
export default {
  data() {
    return {
      EuroNewsLogo,
    };
  },
  methods: {
    sidebarToggler() {
      this.$refs["sidebar"].classList.toggle("nav-act");
    },
    toggler(e = null, refItemName) {
      e.target.parentNode.classList.toggle("rotate-[90deg]");
      this.$refs[refItemName].classList.toggle("hidden");
    },
  },
};
</script>
  
<style scoped>
.active div:nth-child(2) {
  display: flex;
}

@media (max-width: 1024px) {
  .sidebar {
    left: -110%;
  }

  .nav-act {
    left: 0 !important;
  }
}
</style>