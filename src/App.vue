<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavFooter from '@/components/navbarfooter.vue'
</script>

<template>
  <NavFooter>
      <div class="mt-20 w-full">
        <RouterView/>
      </div>
  </NavFooter>
</template>

