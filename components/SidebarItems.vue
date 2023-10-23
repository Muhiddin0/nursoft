<template>
  <div
    class="flex justify-between px-6 py-2 hover:bg-orange-200 transition-all rounded-r-md"
  >
    <b>NEWS</b>
    <div>
      <span>30</span>
      <button class="transition-all" @click="(e) => toggler(e, 'body')">
        <Icon size="24px" name="ic:baseline-keyboard-arrow-down" />
      </button>
    </div>
  </div>

  <div
    ref="body"
    class="flex hidden justify-between items-center text-green-500 px-4 py-1"
  >
    <div class="flex items-center gap-1">
      <div class="w-[35px] h-[35px] rounded-full bg-gray-500"></div>
      <p class="">EuroNews</p>
    </div>

    <p>2 news</p>
  </div>
</template>

<script>
export default {
  methods: {
    toggler(e = null, refItemName) {
      e.target.parentNode.classList.toggle("rotate-90");
      this.$refs[refItemName].classList.toggle("hidden");
    },
  },
};
</script>

<style lang="scss" scoped></style>
