<template>
  <section>
    <div class="container flex flex-col min-h-[90vh] justify-center items-center">
      <div class="flex flex-col gap-10 max-w-[527px] mx-auto">
        <h1 class="text-2xl text-center">Create Your Account</h1>

        <label class="w-[100%] relative" for="">
          <input @input="changeValue" v-model="email" class="text-input" type="text" />
          <p class="placeholder-p">Enter your email address</p>
        </label>

        <label class="w-[100%] relative" for="">
          <input @input="changeValue" v-model="password_1" class="text-input" type="password" />
          <p class="placeholder-p">Enter your password</p>
        </label>
        <label class="w-[100%] relative" for="">
          <input @input="changeValue" v-model="password_2" class="text-input" type="password" />
          <p class="placeholder-p">Enter password again</p>
        </label>

        <div class="flex justify-between gap-2 flex-wrap">
          <label class="w-[45%] relative" for="">
            <input @input="changeValue" v-model="first_name" class="text-input" type="text" />
            <p class="placeholder-p">First name</p>
          </label>

          <label class="w-[45%] relative" for="">
            <input @input="changeValue" v-model="last_name" class="text-input" type="text" />
            <p class="placeholder-p">Last name</p>
          </label>

          <div class="flex flex-col justify-center items-center mt-6">
            <button @click="signup" class="btn bg-green-500 text-white self-center w-[300px]">
              SIGN UP
            </button>
            <p>
              By clicking Create account, I agree that I have read and accepted
              the
              <a class="text-green-500" href="google.com">Terms of Use</a> and
              <a class="text-green-500" href="google.com"> Privacy Policy.</a>
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 mt-7 w-[100%]">
        <button class="btn gap-3 w-[300px] bg-black text-white">
          <Icon name="mdi:github" />
          Git Hub
        </button>
        <button class="btn gap-3 w-[300px] bg-cyan-400 text-white">
          <Icon name="mdi:twitter" />
          Twitter
        </button>
        <button class="btn gap-3 w-[300px] bg-cyan-600 text-white">
          <Icon name="ic:twotone-facebook" />
          Facebook
        </button>
        <button class="btn gap-3 w-[300px] bg-orange-600 text-white">
          <Icon name="bi:google" />
          Google
        </button>
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
  createUserWithEmailAndPassword
} from "firebase/auth";

useFirebase();
const auth = getAuth();

export default {
  data() {
    return {
      email: "",
      password_1: "",
      password_2: "",
      first_name: "",
      last_name: "",
      messages: []
    };
  },
  methods: {

    valdidate(){
      
    }
    
    signup(e) {
      
      e.target.style = "cursor: no-drop;"
      e.target.setAttribute('disable', 'true')
      

      
      setPersistence(auth, browserLocalPersistence).then(() => {
        createUserWithEmailAndPassword(auth, this.email, this.password_1)
          .then((userDetails) => {
            user.value = userDetails.user;
            userDetails.user.getIdToken().then((token) => {
              serverAuth(token);
            });
          })
          .catch((e) => {
            this.messages.push(e.code)
          });
      });

      e.target.style = ""
      e.target.removeAttribute('disable')

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
};
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