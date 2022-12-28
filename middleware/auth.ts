
import { User } from '~/types/firebaseUser';
import { getAuth } from '@firebase/auth';
export default defineNuxtRouteMiddleware((to,from) => {

    const auth = getAuth()
    const user = auth?.currentUser
    
    // if(user){
        
    //     return;
    // }
  
    // return navigateTo('/login')
})