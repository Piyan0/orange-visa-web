<script setup>
  import useImage from '@comp/useImage.js'
  import OurTeam from "./OurTeam.vue";
</script>
<template>
  <div class="bg-gray-100 py-8 rounded-3xl">
    <p class="text-center text-xl font-bold">Meet Our Awesome Team</p>
    <p class="text-center text-sm">The people that made this real</p>
    <div class="my-8"></div>
    <div class="flex flex-wrap justify-center gap-4">
      <OurTeam
        name="Johm Doe"
        position="CEO"
        :img="useImage('pp-1.png')"></OurTeam>
      <OurTeam
        name="John Shmoe"
        position="Adm. Assitant"
        :img="useImage('pp-2.png')"></OurTeam>
      <OurTeam
        name="Anita Miss"
        position="Field Review"
        :img="useImage('pp-4.png')"></OurTeam>
      <OurTeam
        name="Joe Blogg"
        position="HR managaer"
        :img="useImage('pp-3.png')"></OurTeam>
    </div>
  </div>
</template>
