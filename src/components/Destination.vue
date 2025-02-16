<script setup>
  import { Icon } from "@iconify/vue";
  const props = defineProps(["tittle", "detail", "img"]);
</script>

<template>
  <div class="w-full md:w-[300px] flex gap-3 flex-col items-center">
    <div class="w-[160px] h-[200px]">
      <img
        class="shadow-xl shadow-green-200 rounded-full object-cover w-full h-full"
        :src="props.img"
        alt="" />
    </div>
    <p class="text-gray-700 font-bold">{{ props.tittle }}</p>
    <p class="text-sm text-gray-500 text-center">
      {{ props.detail }}
    </p>
    <a
      class="focus:ring-4 transition-all ring-blue-200 text-gray-200 bg-green-500 p-2 px-6"
      href="#">
      Learn More
    </a>
  </div>
</template>
