<template>
  <div class="flex flex-wrap sm:flex-nowrap  gap-2">
    <Icon size="24px" class="text-green-500 order-3 sm:order-[-1]" name="material-symbols:check-circle-outline-rounded" />
    <div class="flex  gap-3 flex-col">
      <h1 class="text-xl font-bold">
        Rijeka begins year of European Capital of Culture 2020 with opening
        ceremony
      </h1>

      <div class="flex justify-between">
        <p>Dec 30 2021 EuroNews 4 min read</p>

        <div class="flex gap-2">
          <button>
            <Icon size="24px" name="ic:baseline-bookmark-border" />
          </button>
          <button>
            <Icon size="24px" name="ph:share-network-bold" />
          </button>
          <button>
            <Icon size="24px" name="ic:round-more-vert" />
          </button>
        </div>
      </div>

    </div>
    <img class="order-[-1] w-[100%] sm:w-auto sm:order-3" :src="NewsPreviuw" alt="" />
  </div>
</template>

<script>
import NewsPreviuw from "~/assets/images/NewsPreviuw.svg";
export default {
  data() {
    return {
      NewsPreviuw,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>