<script setup>
  import {Icon} from '@iconify/vue'
</script>
<template>
  <div class="p-4 flex flex-col md:flex-row md:justify-evenly m gap-2 bg-gray-800 text-gray-300 text-sm">
    <div class="flex flex-col gap-1">
      <p class="text-base font-bold my-1">Orang Visa</p>
      <p>Travelling Agency</p>
    </div>
    <div class="flex flex-col gap-1">
      <p class="font-bold my-1">Navigation</p>
      <a href="#" class="">Home</a>
      <a href="#" class="">Carrer</a>
      <a href="#" class="">Packages</a>
      <a href="#" class="">About</a>
    </div>
    <div class="flex flex-col gap-1">
      <p class="font-bold my-1">Socials</p>
      <div class="flex items-center gap-1 text-xs">
      <Icon width=18 icon="mdi:facebook"></Icon>
      <p>Orange Visa</p>
    </div>
      <div class="flex items-center gap-1 text-xs">
      <Icon width=18 icon="mdi:youtube"></Icon>
      <p>Orange Visa</p>
    </div>
      <div class="flex items-center gap-1 text-xs">
      <Icon width=18 icon="mdi:instagram"></Icon>
      <p>Orange Visa</p>
    </div>
       
    </div>
    
  </div>
</template>