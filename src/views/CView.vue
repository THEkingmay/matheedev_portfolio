<script setup>
import { usePortstore } from '../stores/counter'
import { RouterLink } from 'vue-router'
const useStore = usePortstore()

</script>
<template>
    <div class="h-max shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
        <div class="text-3xl font-bold mb-4 text-center text-primary">C language Project</div>
        <div class="flex flex-col items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
            <RouterLink :to="{name:'project',params:{lang:'C' , index:index}}" v-for="(list,index) in useStore.listsCproject" class="flex justify-center w-full p-5" :key="index">
                    <div class="w-full text-xl font-semibold h-40 bg-primary text-primary-content flex items-center justify-center shadow-lg rounded-lg transition-transform transform hover:scale-105 lg:w-56 lg:h-56">
                        {{ list.name}}
                    </div>
            </RouterLink>
        </div>
    </div>
</template>