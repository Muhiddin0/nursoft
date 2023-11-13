<template>
  <HeaderBar />
  <section>
    <div class="container flex gap-3 min-h-[90vh] justify-center items-center">
      <div>
        <div class="flex flex-col gap-5 w-[100%] md:w-[446px] p-1 md:p-3 mx-auto">
          <h1 class="text-2xl text-center">Login Your Account</h1>

          <label class="w-[100%] relative" for="">
            <input @input="changeValue" v-model="email" class="text-input" type="text" />
            <p class="placeholder-p">Enter your email address</p>
          </label>

          <label class="w-[100%] relative" for="">
            <input @input="changeValue" v-model="password" class="text-input"
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

        <div class="flex flex-col gap-4 items-center mt-7 w-[100%] md:w-[446px] p-1 md:p-3 my-6">
          <button @click="signup" class="btn gap-3 w-[100%] sm:w-[400px] bg-green-500 text-white">
            Login
          </button>
          <p>
            Are you not account
            <a class="text-green-500" href="google.com">Signup</a>
            hear
          </p>
        </div>

        <div class="flex flex-col gap-4 items-center mt-7 w-[100%] md:w-[446px] p-1 md:p-3">
          <button @click="googleAuth" class="btn gap-3 w-[100%] sm:w-[400px] bg-orange-600 text-white">
            <Icon name="bi:google" />
            Google
          </button>
        </div>
      </div>

      <div
        class="flex-col hidden md:flex gap-6 justify-center items-center w-[440px] h-[90vh] p-2 border-[2px] bg-green-500 text-white">
        <h1 class="text-3xl">Hi my friend</h1>
        <p class="text-center max-w-[274px]">
          Enter your personal details and strart journey with us
        </p>
        <NuxtLink class="btn border-white border-[2px]" to="/signup">Signup</NuxtLink>
      </div>
    </div>
  </section>

  <Messages v-for="message in messages" :message="message" />
</template>

<script>
import { messages } from "~~/store/messages";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

useFirebase();
const auth = getAuth();

export default defineComponent({
  setup() {
    definePageMeta({
      layout: false,
    });
  },
  data() {
    return {
      show_password: false,
      email: "",
      password: "",
      messages: [],
    };
  },
  methods: {
    signup() {
      signInWithEmailAndPassword(auth, 'salom1@gmail.com', 'UZBcoders2005')
        .then((userCredential) => {
          this.$router.push('/news')

        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    changeValue(e) {
      let labelElm = e.target.parentElement;
      labelElm.classList.add("active");
    },

    googleAuth() {
      signInWithPopup(auth, googleProvider)
        .then((e) => {
          this.$router.push("/news");
        })
        .catch((error) => {
          this.messages.push(error.code);
        });
    },
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
