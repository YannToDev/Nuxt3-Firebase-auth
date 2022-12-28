<template>
    <div>
        <h1>Main page</h1>
        <div>
            {{ firebaseUser }}
        </div>
    </div>
</template>

<script setup lang="ts">

    const firebaseUser = useFirebaseUser();

</script>
