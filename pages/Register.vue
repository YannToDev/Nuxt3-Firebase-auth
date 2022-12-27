<template>
    <div>
        <h1>Register View</h1>
        <p>{{ state.errorCode }} {{ state.errorMessage }}</p>
        <p v-if="user">{{ user }}</p>
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

    // onMounted(async() => {

    //     userInfos.email = "neymar@chevre.com";
    //     userInfos.password = "TheGoat";

    //     const {credentials,firebaseState } = await createrUser(userInfos.email, userInfos.password);

    //     if(credentials){
    //         user.value = credentials.user;
    //     }
    //     else{
    //         user.value = null;
    //     }
        
        
    //     if(firebaseState){
    //         state.errorCode = firebaseState.errorCode;
    //         state.errorMessage = firebaseState.errorMessage;

    //     }
    // })

</script>
