<script setup>
  import Package from "./Package.vue";
</script>
<template>
  <div class="my-8"></div>
  <p class="mx-4 text-xl text-center font-bold text-gray-700">Packages</p>
  <p class="mx-4 text-gray-500 text-center text-sm">Enjoy our beloved packages</p>
  <div class="my-4"></div>
  <div class="mx-2 flex gap-4 flex-wrap justify-center">
    <Package
      tittle="Lover's Retreat Package"
      detail="A romantic getaway to a secluded cabin in the woods with a private hot tub, starlit dinners, and cozy fireplaces."></Package>
    <Package
      tittle="Enchanted Island Escape"
      detail="A dream vacation on a tropical island with white sandy beaches, candlelit beachside dinners, and sunset cruises."></Package>
    <Package
      tittle="Whispering Pines Honeymoon"
      detail="A mountain retreat with breathtaking views, outdoor adventures, and intimate lodge accommodations."></Package>
  </div>
</template>
