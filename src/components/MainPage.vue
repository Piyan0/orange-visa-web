<script setup>
  import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="relative">
    <div class="layer relative">
      <div class="z-10 absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent to-gray-50"></div>
      <img
        class="absolute h-full w-full object-cover brightness-[0.8]"
        src="@images/bg.jpg"
        alt="" />
    </div>
    <div class="z-30 relative pointer-events-none relative z-20 border-b-[1px] border-gray-400">
      <div class="px-1 py-2 text-gray-200 backdrop-blur-sm flex justify-end">
        <Icon
          width="24"
          class="md:hidden"
          icon="line-md:menu"></Icon>
        <div class="hidden md:flex gap-4 text-gray-300 px-4 text-sm">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Carrer</a>
        </div>
      </div>
    </div>
    <div class="z-30 relative mt-10 relative flex flex-col items-center justify-center">
      <p class="bg-amber-500 my-2 p-1 px-4 rounded-3xl text-sm text-gray-900 font-light">450+ people use our service</p>
      <div class="py-3 my-2 text-4xl md:w-[500px] text-green-200 shadow-2xl rounded outline text-center px-5 mx-4 relative">
        Welcome To
        <p class="font-[Lobster]">Orange Visa</p>
      </div>
      <p class="my-3 text-lg text-center px-8 text-gray-900 font-light">We Specialize in creating ungorgettable travel experiences tailored just for you!</p>
      <a
        class="flex gap-1 items-center my-2 focus:bg-gray-200 focus:text-gray-800 transition-all p-2 px-8 rounded text-sm bg-green-500 text-gray-800 shadow"
        href="#">
        <Icon
          width="18"
          icon="mdi:arrow-bottom"></Icon>
        Explore
      </a>

      <div class="flex border-b-2 border-white text-gray-900 flex-wrap backdrop-blur-sm text-gray-300 my-10 rounded-xl mx-4 items-center justify-center gap-3 p-2">
        <div class="flex flex-col items-center p-1">
          <p class="text-xl">450+</p>
          <p class="text-xs font-light">People Happy</p>
        </div>
        <div class="flex flex-col items-center p-1">
          <p class="text-xl">4.5m</p>
          <p class="text-xs font-light">Revenue</p>
        </div>
        <div class="flex flex-col items-center p-1">
          <p class="text-xl">3.4+</p>
          <p class="text-xs font-light">Years experience</p>
        </div>
        <div class="flex flex-col items-center p-1">
          <p class="text-xl">99+</p>
          <p class="text-xs font-light">Destinations</p>
        </div>
      </div>
    </div>
  </div>
</template>
