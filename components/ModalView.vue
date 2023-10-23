<template>
  <div ref="modal-view" class="w-[544px] my-5">
    <div
      @click="this.$refs['modal-view'].classList.toggle('active')"
      class="header flex justify-between items-center py-3 px-4 bg-[#F4F3F1]"
    >
      <b>Passive modal title ?</b>
      <button @click="this.$refs['modal-view'].classList.toggle('active')">
        <Icon name="material-symbols:add" />
        <Icon name="ic:sharp-minus" />
      </button>
    </div>

    <div class="body py-3 pl-5 bg-orange-100">
      <h1 class="text-lg">Passive modal title 4?</h1>
      <p class="mt-[50px] max-w-[370px]">
        Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div .body {
  display: none;
}
div.active .body {
  display: block;
}

div svg:nth-child(2) {
  display: none;
}
div.active svg:nth-child(2) {
  display: block;
}

div svg:nth-child(1) {
  display: block;
}
div.active svg:nth-child(1) {
  display: none;
}
</style>