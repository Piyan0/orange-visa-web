<script setup>
  import Reason from "./Reason.vue";
</script>
<template>
  <div class="flex px-2 flex-col items-center">
    <div class="my-8"></div>
    <p class="mx-4 text-xl font-bold text-gray-700">Why choose us?</p>
    <p class="mx-4 text-gray-500 text-sm">The reason why you should choose us!</p>
    <div class="my-4"></div>
    <div class="flex flex-col mx-2">
      <Reason
        number="1"
        tittle="Personalized Service"
        detail="Our dedicated team tailors every trip to your unique interests and preferences, ensuring an unforgettable experience."/>
      <Reason
        number="2"
        tittle="Expert Knowledge"
        detail="With years of travel expertise, we know the best destinations, hidden gems, and must-see attractions to make your journey exceptional."/>
      <Reason
        number="3"
        tittle="Seamless Planning"
        detail="From booking flights and accommodations to arranging activities, we handle all the details, so you can relax and enjoy your adventure."/>
      <Reason
        number="4"
        tittle="Commitment to Quality"
        detail="We partner with trusted providers to ensure high-quality services and experiences throughout your journey."/>
    </div>
  </div>
</template>
