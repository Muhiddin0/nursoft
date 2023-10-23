<template>
  <section>
    <div class="max-w-[560px] mx-auto p-6">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 class="text-3xl text-center max-w-[560px] font-bold">FAQ</h1>
        <div
          class="flex border-b-green border-b-[2px] w-[100%] sm:w-[446px] px-3 mt-[70px]"
        >
          <input
            class="w-full outline-none border-0"
            placeholder="Search for answers or browse by topics"
            type="text"
          />
          <button>
            <Icon size="30px" name="ic:sharp-search" />
          </button>
        </div>
      </div>

      <div class="flex flex-wrap justify-around gap-[40px]">
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="settings" alt="" />
          <b class="text-center">New in Newsletter?</b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="organization" alt="" />
          <b class="text-center">Organize </b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="apperance" alt="" />
          <b class="text-center">Appearance</b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="shareing" alt="" />
          <b class="text-center">Sharing</b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="pricing" alt="" />
          <b class="text-center">Pricing</b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="account" alt="" />
          <b class="text-center">Account</b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="referal" alt="" />
          <b class="text-center">Account</b>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[100px]">
          <img class="w-[60px] h-[60px]" :src="terms" alt="" />
          <b class="text-center">Account</b>
        </div>
      </div>

      <div class="mt-[70px] flex flex-col">
          <b class="text-green-500">New in Newsletter-App?</b>
          <b>Everything you need to know about getting started.</b>
      </div>

      <div class="mt-6">
        <ModalView />
        <ModalView />
        <ModalView />
        <ModalView />
        <ModalView />
      </div>
    </div>
  </section>
</template>

<script>
import settings from "../assets/images/settings.svg";
import organization from "../assets/images/organization.svg";
import apperance from "../assets/images/apperance.svg";
import shareing from "../assets/images/shareing.svg";
import pricing from "../assets/images/pricing.svg";
import account from "../assets/images/account.svg";
import referal from "../assets/images/referal.svg";
import terms from "../assets/images/terms.svg";

export default {
  data() {
    return {
      settings,
      organization,
      apperance,
      shareing,
      pricing,
      account,
      referal,
      terms
    };
  },
};
</script>

<style lang="scss" scoped>
</style>