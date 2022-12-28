<template>
    <div>
        <h1>Main page</h1>
        <NuxtLink to="/secret">Go to the secret Page</NuxtLink>
        <div>
            {{ firebaseUser }}
        </div>
    </div>
</template>

<script setup lang="ts">

    // definePageMeta({
    //     middleware:["auth"]
    // })

    const firebaseUser = useFirebaseUser();

</script>
