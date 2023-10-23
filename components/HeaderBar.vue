<template>
  <header class="mt-0">
    <div class="container flex flex-wrap gap-5 justify-between items-center z-10">
      <Logotip />
      <nav class="flex items-center gap-[30px] z-10">
        <div
          ref="ulBox"
          @click="console.log(this.$refs['ulBox'].classList.remove('active'))"
        >
          <ul class="flex gap-3 min-w-[430px] w-[100%] sm:w-[350px]">
          <button
              class="menu-togler-btn self-end btn-key"
              @click="
                console.log(this.$refs['ulBox'].classList.remove('active'))
              "
            >
              x
            </button>
            <li>
              <NuxtLink
                Link
                active="active"
                class="hover:text-green-500 transition-all relative"
                to="/howtowork"
                >How it works</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="hover:text-green-500 transition-all relative"
                href="/whynewslater"
                >Why NewsletterApp?
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="hover:text-green-500 transition-all relative"
                href="/prices"
                >Pricing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="hover:text-green-500 transition-all relative"
                href="/blog"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <a
                class="hover:text-green-500 transition-all relative"
                href=""
              ></a>
            </li>
            <li>
              <NuxtLink
                to="/login"
                class="btn menu-togler-btn text-green-500 bo border-2 border-green-500 mt-6"
                >Login
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink
          to="login"
          class="btn login-btn text-green-500 border-2 border-green-500"
          >Login</NuxtLink
        >
        <button
          class="menu-togler-btn"
          @click="console.log(this.$refs['ulBox'].classList.toggle('active'))"
        >
          <Icon size="30px" class="text-green-500" name="ci:hamburger-lg" />
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
