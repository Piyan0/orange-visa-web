<script setup>
import Comment from "./Comment.vue";
</script>

<template>
  <div class="bg-green-500 my-8 rounded-3xl  py-12">
    
  <div class="text-gray-200 my-4">
    <p class="text-center text-xl font-bold">Our Costumers</p>
    <p class="text-center text-sm">See what our beloved customers said</p>
  </div>
  <div class="gap-2 mx-2 px-4 flex flex-wrap items-center justify-center">
    <Comment></Comment>
    <Comment></Comment>
    <Comment></Comment>
    <Comment></Comment>
  </div>
  </div>
</template>
