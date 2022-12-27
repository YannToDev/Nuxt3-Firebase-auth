<template>
    <div>
        <h1 class="text-center">Login View</h1>
        <p v-if="user">{{ user.email }}</p>
        <p v-else-if="state.errorCode">{{ state.errorCode }}</p>

        <div class="flex max-w-2xl mx-auto">
            <button @click="signIn"  class="bg-green-400 py-2 px-4  rounded-md mx-auto block">Sign In</button>
            <button @click="signOut" class="bg-blue-400 py-2 px-4  rounded-md mx-auto block">Sign Out</button>
        </div>
    </div>
</template>

<script setup lang="ts">

     const userInfos = reactive({
        email:'',
        password:''
    })

    const user = ref();

    const state = reactive({
        errorCode: '',
        errorMessage: ''
    })

    const signIn = async() => {

        userInfos.email = "neymar@chevre.com";
        userInfos.password = "TheGoat";

        const { credentials, firebaseState } = await signInUser(userInfos.email, userInfos.password)

        if (credentials) {
            user.value = credentials.user;
        }
        else {
            user.value = null;
        }


        if (firebaseState) {
            state.errorCode = firebaseState.errorCode;
            state.errorMessage = firebaseState.errorMessage;

        }
    };

    const signOut = async() =>{

        try {
            await signOutUser()
        } catch (error) {
            console.log(error)
        }
    };
</script>
