<template>
  <HeaderBar />
  <section>
    <div class="container flex gap-3 min-h-[90vh] justify-center items-center">
      <div>
        <div class="flex flex-col gap-10 w-[100%] md:w-[446px] p-1 md:p-3 mx-auto">
          <h1 class="text-2xl text-center">Create Your Account</h1>

          <label class="w-[100%] relative" for="">
            <input @input="changeValue" v-model="email" class="text-input" type="text" />
            <p class="placeholder-p">Enter your email address</p>
          </label>

          <label class="w-[100%] relative" for="">
            <input @input="changeValue" v-model="password_1" class="text-input"
              :type="show_password ? 'text' : 'password'" />
            <p class="placeholder-p">Enter your password</p>

            <button class="absolute right-0" @click="show_password = !show_password">
              <b v-if="show_password">
                <Icon size="24px" name="ci:show" />
              </b>
              <b v-else>
                <Icon size="24px" name="formkit:hidden" />
              </b>
            </button>
          </label>
        </div>

        <div class="flex flex-col gap-4 items-center mt-7 w-[100%] md:w-[446px] p-1 md:p-3">
          <button class="btn gap-3 w-[100%] sm:w-[400px] bg-black text-white">
            <Icon name="mdi:github" />
            Git Hub
          </button>
          <button class="btn gap-3 w-[100%] sm:w-[400px] bg-cyan-400 text-white">
            <Icon name="mdi:twitter" />
            Twitter
          </button>
          <button class="btn gap-3 w-[100%] sm:w-[400px] bg-cyan-600 text-white">
            <Icon name="ic:twotone-facebook" />
            Facebook
          </button>
          <button class="btn gap-3 w-[100%] sm:w-[400px] bg-orange-600 text-white">
            <Icon name="bi:google" />
            Google
          </button>
        </div>

        <div>
          <p class="text-center max-w-[274px] mx-auto mt-6 mb-3">
            You have alredy account
            <NuxtLink class="" to="/signup">signup</NuxtLink> hear
          </p>
        </div>
      </div>

      <div
        class="flex-col hidden md:flex gap-6 justify-center items-center w-[440px] h-[90vh] p-2 border-[2px] bg-green-500 text-white">
        <h1 class="text-3xl">Hello world</h1>
        <p class="text-center max-w-[274px]">
          Enter your personal details and strart journey with us
        </p>
        <NuxtLink class="btn border-white border-[2px]" to="/signup">SIGN UP</NuxtLink>
      </div>
    </div>
  </section>

  <Messages />
</template>

<script>
import { messages } from "~~/store/messages";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
} from "firebase/auth";

useFirebase();
const auth = getAuth();

export default defineComponent({
  setup() {
    definePageMeta({
      layout: false
    })
  },
  data() {
    return {
      show_password: false,
      email: "",
      password_1: "",
      password_2: "",
      first_name: "",
      last_name: "",
      messages: [],
    };
  },
  methods: {
    signup() {
      setPersistence(auth, browserLocalPersistence).then(() => {
        createUserWithEmailAndPassword(auth, this.email, this.password_1)
          .then((userDetails) => {
            user.value = userDetails.user;
            userDetails.user.getIdToken().then((token) => {
              serverAuth(token);
            });
          })
          .catch((e) => {
            this.messages.push(e.code);
          });
      });
    },
    changeValue(e) {
      let labelElm = e.target.parentElement;
      labelElm.classList.add("active");
    },
  },
  mounted() {
    messages.push("salom");
    console.log(messages);
  },
});

</script>

<style scoped>
.text-input {
  border-bottom: 2px solid #d4d6d5;
  outline: 0;
  padding: 2px 10px;
  width: 100%;
  transition: 0.3s;
}

label:hover .text-input {
  border-bottom: 2px solid #119c59;
}

label.active .text-input {
  border-bottom: 2px solid #119c59;
}

.placeholder-p {
  position: absolute;
  top: 0;
  left: 10px;
  transition: 0.3s;
  transform-origin: 0 0;
}

label:hover .placeholder-p {
  scale: 0.8;
  top: -15px;
}

label.active .placeholder-p {
  scale: 0.8;
  top: -15px;
}
</style>
