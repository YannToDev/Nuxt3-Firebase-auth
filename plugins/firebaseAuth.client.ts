import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

export default defineNuxtPlugin((nuxtApp) =>{

    const config = useRuntimeConfig();

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: "nuxt3-razor.firebaseapp.com",
        projectId: "nuxt3-razor",
        storageBucket: "nuxt3-razor.appspot.com",
        messagingSenderId: "341791402191",
        appId: "1:341791402191:web:a3d9c5d900c389597cefba"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)

    initUser();

    // pour le cas ou l'on a définit le routeMiddleware comme un plugin et non 
    // un fichier du dossier middleware.
    //  const auth = getAuth();
    // nuxtApp.vueApp.provide('auth', auth);
    // nuxtApp.provide('auth', auth);
})