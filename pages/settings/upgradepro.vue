<template>
  <section>
    <div class="mini-container">
      <h1 class="text-2xl font-bold">Upgrade to Newsletter Pro</h1>
      <form class="flex flex-wrap gap-4 my-4 max-w-[450px]" action="">
        <label class="w-[100%]" for="">
          <p class="pl-[10px]">Email</p>
          <input class="rounded-full w-[100%] border-[2px] border-green-500 bg-orange-50 p-3" type="text" />
        </label>
        <label class="w-[100%]" for="">
          <p class="pl-[10px]">Name on card</p>
          <input class="rounded-full w-[100%] border-[2px] border-green-500 bg-orange-50 p-3" type="text" />
        </label>
        <label class="w-[100%]" for="">
          <p class="pl-[10px]">card number</p>
          <div class="flex gap-4 rounded-full w-[100%] border-[2px] border-green-500 bg-orange-50 p-3">
            <input placeholder="1234 1234 1234 1234" class="w-[100%] bg-transparent" type="text" />
            <img class="" :src="cards" alt="" />
          </div>
        </label>

        <div class="flex gap-4 flex-wrap justify-around items-center w-[100%]">
          <label class="w-[100%] lg:w-[45%]" for="">
            <p class="pl-[10px]">Name on card</p>
            <input placeholder="MM/YY" class="rounded-full w-[100%] border-[2px] border-green-500 bg-orange-50 p-3"
              type="text" />
          </label>
          <label class="w-[100%] lg:w-[45%]" for="">
            <p class="pl-[10px]">Name on card</p>
            <input placeholder="CVC" class="rounded-full w-[100%] border-[2px] border-green-500 bg-orange-50 p-3"
              type="text" />
          </label>
        </div>

        <label class="w-[100%]" for="">
          <p class="pl-[10px]">Country or region</p>
          <select class="border-[2px] border-green-500 rounded-full p-2 bg-orange-50 w-[100%]" name="" id="">
            <option value="">---------</option>
            <option value="">Uzbekistan</option>
            <option value="">Falastin</option>
            <option value="">Russsia</option>
            <option value="">Tajikistan</option>
            <option value="">Qirim</option>
            <option value="">Qazqistan</option>
          </select>
        </label>

        <button href="" class="btn bg-green-500 text-white">Upgrade</button>
      </form>
    </div>
  </section>
</template>

<script>
import cards from "~/assets/images/cards.svg";

export default defineComponent({
  data() {
    return {
      cards,
    };
  },
  setup() {
    definePageMeta({
      layout: 'settingsbar'
    })
  }
});
</script>

<style scoped>
* {
  outline: none;
}
</style>
