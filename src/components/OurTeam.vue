<script setup>
  const props = defineProps(["name", "position", "img"]);


</script>

<template>
  <div class="flex flex-col items-center">
    <img
      class="size-32 object-cover rounded-full border-4 border-green-500"
      :src="props.img"
      alt="" />
    <p class="my-1 text-sm text-gray-700">{{ props.position }}</p>
    <p class="font-bold p-2 bg-green-500 text-gray-200 rounded-xl">{{ props.name }}</p>
  </div>
</template>
