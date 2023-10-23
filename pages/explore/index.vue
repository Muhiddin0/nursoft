<template>
  <section class="feeds">
    <div class="mini-container">
      <h1 class="w-[100%] text-4xl">Fedds</h1>
      <div class="flex justify-between items-center gap-6 mt-6">
        <button class="text-green-500 border-b-[2px] border-green-500">
          All
        </button>
        <div class="flex gap-6">
          <p>
            <Icon name="circum:grid-3-2" />
            Reorder
          </p>
          <p>
            <Icon name="material-symbols:add-circle-outline-rounded" />
            Create
          </p>
        </div>
      </div>
      <div class="flex flex-wrap justify-around gap-6 mt-3">
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="w-[186px]" :src="feeds" alt="" />
          <b>Digital Marketing</b>
          <div class="flex justify-between items-center">
            <p>320 sources</p>
            <div class="flex gap-2">
              <button>
                <Icon name="material-symbols:edit-sharp" />
              </button>
              <button>
                <Icon name="ic:baseline-remove-red-eye" />
              </button>
              <button>
                <Icon name="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <b>What can I follow?</b>
        <p>
          Follow blogs, news, RSS feeds, web comics, job boards, Google
          Alerts. Basically anything. Find popular feeds & learn more
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import feeds from '../../assets/images/feed.svg'



definePageMeta({
  layout: "explore",
});
</script>

<style lang="scss" scoped></style>