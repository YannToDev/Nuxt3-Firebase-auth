<template>
    <div>
        
        <div class="flex flex-col bg-gray-200 py-10 px-5 rounded-md mx-4 lg:mx-0">
            <h2 class="text-2xl font-semibold mb-5">{{ props.title }}</h2>

                <div class="gap-y-2 flex flex-col">
                    <label for="email" class="font-semibold">Email</label>
                    <input
                        v-model="props.form.email"
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        class="py-2 px-4 rounded-sm"
                    >
                    <label
                        for="password"
                        class="font-semibold"
                    >
                        Password
                    </label>
                    <input
                        v-model="props.form.password"
                        type="password"
                        id="password"
                        placeholder="********"
                        class="py-2 px-4 rounded-sm"
                    >

                    <div v-if="props.message" class="my-3 text-green-600 text-lg">
                        {{ props.message }}
                    </div>

                    <button 
                        @click="$emit('submit')"
                        class="bg-green-500 text-white py-2 w-1/4 mt-2 rounded-md hover:bg-green-600"
                    >
                        {{ props.title }}
                    </button>

                    <slot></slot>

                </div>
        </div>

    </div>
</template>

<script setup lang="ts">

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        message: {
            type : String
        },
        form :{
            type:Object,
            required:true

        }
    })

</script>

