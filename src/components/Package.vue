<script setup>
  import {Icon} from '@iconify/vue'
  const props= defineProps(['tittle', 'detail'])
</script>
<template>
  <div class="border-2 border-green-500  relative w-full md:w-[200px] relative group select-none overflow-hidden flex flex-col gap-4 rounded-2xl p-4 bg-gray-100 transition-all text-gray-800 ">
    <div class="size-16 bg-green-300 top-0 left-0 rounded-br-3xl flex items-center justify-center">
      <Icon class="text-green-400" width=48 icon="mingcute:love-fill"></Icon>
    </div>
    <p class="z-20 font-bold text-green-500">{{props.tittle}}</p>
    <p class="z-20 text-sm font-light">{{props.detail}}</p>
    <a class="w-fit border-b-[1px] border-green-400 z-20 text-green-500 text-sm" href="#">Learn More</a>
  </div>
</template>
