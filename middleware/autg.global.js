
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default defineNuxtRouteMiddleware((to, from) => {
  
  useFirebase()

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    
    const services_pages = [
      'news',
      'faq',
      'upgradepro',
      'explore',
      'settings',
      'settings-account',
      'settings-appearance',
      'settings-organize-labes',
      'settings-organize-sourse',
      'settings-price',
      'settings-terms',
      'settings-upgradepro',
      'read',
    ]

    if (user) {
      // services_pages.forEach(e => {
      //   if (e == to.name) return 
      // })
      
      // return navigateTo('/news')
    } else {
      services_pages.forEach(e => {
        if (e == to.name){
          return navigateTo('/')
        }
      })
    }
  });
});