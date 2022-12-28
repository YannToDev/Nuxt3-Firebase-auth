<template>
    <div>
        <h1>This is the secret Page</h1>
        <div v-if="firebaseUser">
            <client-only>
                <pre >
                    {{ firebaseUser  }}
                </pre>
            </client-only>
        </div>
    </div>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware:["auth"]
    })

    const firebaseUser = useFirebaseUser();

</script>
