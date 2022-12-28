<template >
    <div class="bg-gray-600 h-screen">
        <div class="text-center text-3xl text-white">
            <h1>Welcom to Firebase/Nuxt3 Auth</h1>
            <p class="my-4">Firebase/Nuxt 3 Auth</p>
        </div>
        <div class=" flex flex-col items-center justify-center gap-x-5 md:flex-row">
        
            <div class="sm:w-1/3 w-full">
                <Form
                    @submit="signIn"
                    title="Login"
                    :message="state.errorMessage || state.loginMessage"
                    :form="userInfos"
                >
                    <p>
                        You have not an account?
                        <NuxtLink class="hover:underline" to="/register">Click here</NuxtLink>
                    </p>
                </Form>
            </div>
            
            

            <div v-if="firebaseUser" class= "max-w-[400px] bg-gray-200 mt-4 rounded-md p-4 text-sm">
                <div  class=" text-black">
                    <p>Firebase Auth Current User</p>
                    <pre>{{ firebaseUser }}</pre>
                    <button
                        @click="signOut"
                        class=" bg-red-500 text-white py-2 w-1/4 mt-2 rounded-md hover:bg-green-600"
                    >
                        Sign Out
                    </button>
                </div>
        
            </div>
        
        </div>
        <div v-if="!firebaseUser" >
            <p class="text-white text-center mt-4">User is signed out</p>
        </div>
    </div>

</template>

<script setup lang="ts">

    const router = useRouter();

    const firebaseUser = useFirebaseUser();

     const userInfos = reactive({
        email:'',
        password:''
    })

    const state = reactive({
        errorCode: '',
        errorMessage: '',
        loginMessage: ''
    })

    const signIn = async() => {

        // userInfos.email = "neymar@chevre.com";
        // userInfos.password = "TheGoat";

        const { firebaseState } = await signInUser(userInfos.email, userInfos.password)

        if (firebaseState) {
            state.errorCode = firebaseState.errorCode;
            state.errorMessage = firebaseState.errorMessage;

            setTimeout(() => {
                state.errorCode = "";
                state.errorMessage = "";
            },2000);
        }
        
        if(firebaseState.errorCode ==='' && firebaseState.errorMessage ===''){

            state.loginMessage ="successfuly Login";

            setTimeout(() => {
                state.loginMessage =""
                // router.push("/")
            }, 2000);
        }

        userInfos.password ='';
        userInfos.email='';
    };

    const signOut = async() =>{

        try {
            await signOutUser()
        } catch (error) {
            console.log(error)
        }
    };


</script>


<!-- <h1 class="text-center">Login View</h1> -->
        <!-- <p v-if="user">{{ user.email }}</p>
        <p v-if="state.errorCode">{{ state.errorCode }}</p> -->

<!-- <div class="flex max-w-2xl mx-auto">
            <button v-if="!firebaseUser" @click="signIn"  class="bg-green-400 py-2 px-4  rounded-md mx-auto block">Sign In</button>
            <button v-else @click="signOut" class="bg-blue-400 py-2 px-4  rounded-md mx-auto block">Sign Out</button>
        </div> -->

<!-- <div v-if="firebaseUser">
            <client-only>
                <pre>
                    {{ firebaseUser }}
                </pre>
            </client-only>
        </div>

<div v-else>
            <p>User is signed out</p>
        </div> -->