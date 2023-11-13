<template>
  <header class="mt-0">
    <div
      class="container flex flex-wrap gap-5 justify-between items-center z-10"
    >
      <Logotip />
      <nav class="flex items-center gap-[10px] z-10">
        <div
          ref="ulBox"
          @click="console.log(this.$refs['ulBox'].classList.remove('active'))"
        >
          <ul class="flex gap-3 min-w-[430px] w-[100%] sm:w-[300px]">
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
                to="/"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                Link
                active="active"
                class="hover:text-green-500 transition-all relative"
                to="/howtowork"
                >Works</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="hover:text-green-500 transition-all relative"
                href="/whynewslater"
                >NewsletterApp?
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
                >Register
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink
          to="login"
          class="btn login-btn text-green-500 border-2 border-green-500"
          >Register</NuxtLink
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
.router-link-active {
  @apply text-green-500 transition-[1s];
}

nav li a {
  position: relative;
}
nav li a::before {
  content: "";
  position: absolute;
  bottom: -3px;
  width: 0;
  height: 2px;
  border: 2px;
  @apply bg-green-500;
  transition: 0.3s;
}
nav li a:hover::before {
  width: 100%;
}
</style>
