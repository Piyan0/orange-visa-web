<script setup>
  import {Icon} from '@iconify/vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
    <div class="flex flex-wrap items-center justify-center gap-2 brightness-[0.7]">
      <div class="w-[100px] h-[30px]">
        <img class="w-full h-full object-cover" width=100 src="@images/logo-1.png" alt="">
      </div>
      <div class="w-[100px] h-[30px]">
        <img class="w-full h-full object-cover" width=100 src="@images/logo-2.png" alt="">
      </div>
      <div class="w-[100px] h-[30px]">
        <img class="w-full h-full object-cover" width=100 src="@images/logo-3.png" alt="">
      </div>
      <div class="w-[100px] h-[30px]">
        <img class="w-full h-full object-cover" width=100 src="@images/logo-4.png" alt="">
      </div>
  
    </div>
    <div class="flex p-2 border-[1px] rounded-2xl items-center w-fit gap-2 ">
      <p class="text-gray-800 text-sm ">Follow</p>
      <Icon icon="mdi:facebook"></Icon>
      <Icon width=20  icon="mdi:youtube"></Icon>
      <Icon icon="mdi:instagram"></Icon>
    </div>
  </div>
</template>
