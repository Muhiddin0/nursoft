<template>
  <section>
    <div class="mini-container">
      <div class="flex justify-between items-end">

        <h1 class="text-4xl">News change view</h1>

        <label class="flex" for="#change-view">
          <p>change view</p>
          <button @click="toggleView()" class="ml-3" id="change-view">
            <Icon name="ic:round-format-list-bulleted" />
          </button>
        </label>
      </div>

      <div v-if="viewFormat" class="flex flex-col gap-6 my-12">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div v-else>
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
        <NewsListCard />
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
const viewFormat = ref(true)

const toggleView = () => {
  viewFormat.value = !viewFormat.value
  console.log(viewFormat.value);
}
definePageMeta({
  layout: "explore",
});
</script>
  
<style lang="scss" scoped></style>