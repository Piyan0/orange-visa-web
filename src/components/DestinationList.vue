<script setup>
import Destination from "./Destination.vue";
</script>
<template>
  <div class="mx-2 my-16 border-2 border-green-500 rounded-xl p-4 py-16">
    <div class="mb-8 text-gray-700 rounded-3xl rounded-tr-none rounded-tl-none pb-4 px-2">
      <p class="mx-4 text-xl text-center font-bold">Destinations</p>
      <p class="mx-4 text-center text-sm">Enjoy our beloved Destinations</p>
    </div>
    <div class="flex flex-wrap md:flex-row items-center justify-center mx-4 gap-8">
      <Destination></Destination>
      <Destination></Destination>
      <Destination></Destination>
      <Destination></Destination>
    </div>
  </div>
</template>
