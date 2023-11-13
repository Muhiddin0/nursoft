<template>
  <main class="flex">
    <section ref="sidebar"
      class="sidebar overflow-auto absolute lg:relative z-10 bg-[#F4F3F1] w-[100%] sm:w-[350px] h-[100vh] transition-all">
      <div class="flex justify-between items-center min-h-[84px] px-4">
        <Logotip />
        <button @click="sidebarToggler" class="flex sm:hidden">
          <Icon size="24px" name="ic:twotone-menu" />
        </button>
      </div>
      <div class="flex flex-col gap-3 px-4 mt-6">
        <NuxtLink to="/news" class="flex mb-3 items-center gap-2">
          <Icon size="24px" name="material-symbols:line-start-arrow-outline" />
          Back to news
        </NuxtLink>

        <NuxtLink to="/settings" class="text-green-500">SETTINGS</NuxtLink>

        <NuxtLink class="text-lg font-bold hover:text-green-500 transition-all" to="/settings/organize-sourse">Organize
          Sources</NuxtLink>
        <NuxtLink class="text-lg font-bold hover:text-green-500 transition-all" to="/settings/organize-labes">Organize
          Labels</NuxtLink>
        <NuxtLink class="text-lg font-bold hover:text-green-500 transition-all" to="/settings/appearance">Appearance
        </NuxtLink>
        <NuxtLink class="text-lg font-bold hover:text-green-500 transition-all" to="/settings/price">Upgrade Pro
        </NuxtLink>
        <NuxtLink to="/settings/account" class="text-lg font-bold hover:text-green-500 transition-all">Account</NuxtLink>
        <NuxtLink to="/settings/terms" class="text-lg font-bold hover:text-green-500 transition-all">Terms of use
        </NuxtLink>
        <button @click="logoutModal" class="text-lg text-start font-bold text-red-500 hover:text-red-300 transition-all">
          Logout
        </button>
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

  <section class="absolute hidden z-10 top-0 left-0 bg-[#221e1eba] justify-center items-center w-[100%] h-[100vh] p-7"
    ref="logout">
    <div class="bg-white w-[700px] p-[1em] rounded-lg">
      <h1 class="text-3xl">Are you Logout</h1>
      <div class="flex justify-end flex-wrap gap-3 mt-[100px]">
        <button @click="logout" class="btn border-[2px] border-stone-500 text-stone-500 rounded-full">
          Logout
        </button>
        <button @click="logoutModal" class="btn border-[2px] bg-green-500 text-white rounded-full">
          Cancel
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import EuroNewsLogo from "../assets/images/EuroNewsLogo.svg";
import { getAuth, signOut } from "firebase/auth";

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
    logoutModal() {
      this.$refs["logout"].classList.toggle("modal-active");
    },

    logout() {
      useFirebase();
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
.modal-active {
  display: flex;
}

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
