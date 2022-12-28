<template>
    <div class="h-screen  w-screen flex items-center justify-center bg-gray-600 ">
        <Form 
            @submit="register" 
            title="register" 
            :message="state.errorMessage || state.registerMessage" 
            :form="userInfos" 
            class="w-full lg:w-1/2"
        >
        <p>
            You have alreadyan account?
            <NuxtLink class="hover:underline" to="/login">Click here</NuxtLink>
        </p>
        </Form>

    </div>
        
</template>

<script setup lang="ts">

    const userInfos = reactive({
        email:'',
        password:''
    })


    const state = reactive({
        errorCode: '',
        errorMessage: '',
        registerMessage: ''
    })

    const register = async() => {

        // userInfos.email = "neymar@chevre.com";
        // userInfos.password = "TheGoat";

        const router = useRouter();

        const {credentials,firebaseState } = await createrUser(userInfos.email, userInfos.password);

        if (firebaseState) {
            state.errorCode = firebaseState.errorCode;
            state.errorMessage = firebaseState.errorMessage;

            setTimeout(() => {
                state.errorCode = "";
                state.errorMessage = "";
            }, 2000);
        }

        if (firebaseState.errorCode === '' && firebaseState.errorMessage === '') {

            state.registerMessage = `Successfully registered :${credentials.user.email}`;

            setTimeout(() => {
                state.registerMessage = ""
                router.push("/")
            }, 2000);
        }

            userInfos.password = '';
            userInfos.email = '';
    };

</script>
