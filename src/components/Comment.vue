<script setup>
  import {Icon} from '@iconify/vue'
</script>

<template>
  <div class="lg:w-[400px] px-4 rounded-2xl flex bg-gray-200  flex-row p-2 items-center text-gray-700">
    <div class="flex flex-col items-center">
      <img class="rounded-full size-12 border-2 border-green-500 object-cover" src="@images/people-photo-4.jpg" alt="">
      <div class="flex">
        <Icon class="text-green-400" width="12" icon="material-symbols:star"></Icon>
        <Icon class="text-green-400" width="12" icon="material-symbols:star"></Icon>
        <Icon class="text-green-400" width="12" icon="material-symbols:star"></Icon>
        <Icon class="text-green-400" width="12" icon="material-symbols:star"></Icon>
        <Icon class="text-green-400" width="12" icon="material-symbols:star"></Icon>
      </div>
      <p class="text-xs font-bold">Amara</p>
    </div>
    <p class="text-sm text-gray-700 p-2 m-2 rounded-xl">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa expedita suscipit.
    </p>
  </div>
</template>