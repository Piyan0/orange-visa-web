<script setup>
  import useImage from "@comp/useImage.js";
  import Destination from "./Destination.vue";
</script>
<template>
  <div class="mx-2 my-16 border-2 border-green-500 rounded-xl p-4 py-16">
    <div class="mb-8 text-gray-700 rounded-3xl rounded-tr-none rounded-tl-none pb-4 px-2">
      <p class="mx-4 text-xl text-center font-bold">Destinations</p>
      <p class="mx-4 text-center text-sm">Enjoy our beloved Destinations</p>
    </div>
    <div class="flex flex-wrap md:flex-row items-center justify-center mx-4 gap-8">
      <Destination
        tittle="Mystic Haven"
        :img="useImage('dest-1.png')"
        detail="A hidden paradise shrouded in mystery and tranquility."></Destination>
      <Destination
        tittle="Serene Isle"
        :img="useImage('dest-2.png')"
        detail="A peaceful island escape with crystal-clear waters and soft sandy beaches."></Destination>
      <Destination
        tittle="Eternal Springs"
        :img="useImage('dest-3.png')"
        detail="A lush oasis with cascading waterfalls and natural hot springs."></Destination>
      <Destination
        tittle="Whispering Pines"
        :img="useImage('dest-4.png')"
        detail="A secluded forest retreat surrounded by towering pine trees and soothing nature sounds."></Destination>
    </div>
  </div>
</template>
