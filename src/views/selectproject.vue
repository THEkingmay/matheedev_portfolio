<script setup>
import { useRoute,useRouter } from 'vue-router';
import { onMounted,reactive,ref } from 'vue';
import { usePortstore } from '../stores/counter'
const useStore = usePortstore()
const route = useRoute()
const router = useRouter()
const lang = route.params.lang
const index= route.params.index
let select=reactive({
    name:'',
    Description:'',
    img:'',
    vedio:'',
    codelink:'',
    playlink:''
});
onMounted(()=>{
   useStore.checkselect(lang,index)
   select.name = useStore.selectedProject.name
   select.Description = useStore.selectedProject.Description
   select.img = useStore.selectedProject.img
   select.vedio = useStore.selectedProject.vedio
   select.codelink = useStore.selectedProject.codelink
   select.playlink = useStore.selectedProject.playlink
})

const isDescription= ref(false)
</script>
<template>
    <div class="h-fit shadow-2xl rounded-lg p-6 pb-10 max-w-3xl mx-auto flex flex-col items-center">
        <div v-if="select.img" class="mb-4">
                <img :src="select.img" class="rounded-lg w-full object-cover">
        </div>
        <div v-if="select.vedio" class="mb-4">
                <video muted  controls :src="select.vedio" class="rounded-lg w-full max-w-xl">
                    Your browser does not support the video tag.
                </video>
        </div>
       <div class="p-6">
            <div class="text-2xl font-bold mb-2 text-primary flex justify-center"> 
                <div>{{ select.name }}</div>
                <div class="flex items-center ml-3"><button @click="isDescription=!isDescription"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#ffffff"></path> <path d="M12.0049 16.005L12.0049 15.995" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0049 12.005L12.0049 11.995" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0049 8.005L12.0049 7.995" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2"></path> </g></svg></button></div>
            </div>
            <div v-if="isDescription" class="text-base mb-4 p-3 whitespace-pre-line">{{ select.Description }}</div>
            <div class="grid grid-cols-2">
                <div>
                    <button class="btn btn-outline btn-primary" @click="router.push(`/${lang}`)">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#8ff57a" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#8ff57a" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                    </button>
                </div>
                <div class="flex justify-end">
                    <a target="_blank" :href="select.codelink">
                        <button class="btn btn-outline btn-primary px-6 w-full">Code</button>
                    </a>
                    <a target="_blank" :href="select.playlink">
                        <button class="btn btn-outline btn-accent px-6 w-full ml-2" v-if="select.playlink">Try</button>
                    </a>
                </div>
            </div>
       </div>
    </div>
</template>
<style scoped>
svg{
    width: 1.5rem;
}
</style>