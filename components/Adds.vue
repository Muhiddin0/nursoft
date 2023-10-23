<template>
  <section class="bg-[#25282B]">
    <div data-aos="fade-up" class="flex items-center lg:flex-row flex-col w-[100%] 2xl:w-[50%] gap-[100px] justify-between container min-h-[471px]">
      <div class="info flex flex-col gap-4 justify-center items-center mt-[70px]">
        <h1 class="text-4xl text-white mb-4">
          <b class="block text-center" >
            Bring back the joy of reading 
            newsletters
          </b>
        </h1>
        <b class="text-green-700 mb-6"
          >Subscribe and be ready for amazing experience</b
        >
        <ul class="mt-6">
          <li class="flex items-center gap-3 text-white my-2">
            <Icon name="material-symbols:check-circle-outline-rounded" />
            <p>Save time and read your newsletters in one place.</p>
          </li>
          <li class="flex items-center gap-3 text-white my-2">
            <Icon name="material-symbols:check-circle-outline-rounded" />
            <p>Save time and read your newsletters in one place.</p>
          </li>
          <li class="flex items-center gap-3 text-white my-2">
            <Icon name="material-symbols:check-circle-outline-rounded" />
            <p>Save time and read your newsletters in one place.</p>
          </li>
        </ul>
      </div>

      <div data-aos="fade-up" class="flex justify-center items-end w-[100%] xl:w-[50%] mb-[70px]">
        <img
          class="img lg:w-[80%] w-[400px] translate-y-0 md:translate-y-10 top-0 left-0 z-10 text-white"
          :src="addsimg"
        />
      </div>
    </div>
  </section>
</template>

<script>
import addsimg from "../assets/images/adds-windos.png";
export default {
  data() {
    return {
      addsimg,
    };
  },
};
</script>

<style  scoped>
.img {
  animation: img 3s infinite ease-in;
  
}
@keyframes img {
  0%, 100% {
    transform: translateY(30px);
  }
  50% {
    transform: translateY(40px);
  }
  
}
</style>