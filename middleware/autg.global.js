
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default defineNuxtRouteMiddleware((to, from) => {
  
  useFirebase()

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log(uid);
      return navigateTo('/news')
    } else {
      console.log('not auth');
      return navigateTo('/')
    }
  });
});