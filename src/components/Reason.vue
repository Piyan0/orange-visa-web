<script setup>
  const props= defineProps(["number", "tittle" , "detail"])
</script>

<template>
  <div class="flex gap-3 text-gray-700">
    <div class="flex flex-col">
      <p class="text-lg p-2 bg-green-500 text-gray-200 font-bold size-10 text-center rounded-full flex items-center justify-center">{{props.number}}</p>
      <div class="h-full">
        <div class="border-l-[1px] h-full relative left-[19px] border-gray-400"></div>
      </div>
    </div>
    <div class="flex flex-col pb-4 justify-start">
      <p class="font-bold">{{props.tittle}}</p>
      <p class="text-sm text-gray-600">{{props.detail}}</p>
    </div>
  </div>
</template>
