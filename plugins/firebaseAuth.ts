import { initializeApp } from "firebase/app";

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

})