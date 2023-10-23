<template>
  <section>
    <div class="container">
      <div class="title my-[70px] flex items-center flex-col">
        <h1 class="text-3xl text-center">Organize Sources</h1>
      </div>

      <div class="flex justify-center">
        <Search />
      </div>
    </div>
  </section>
</template>

<script setup>

definePageMeta({
  layout: "settingsbar",
});
</script>

<style lang="scss" scoped></style>
