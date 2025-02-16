<script setup>
  import useImage from "@comp/useImage.js";
  import Comment from "./Comment.vue";
</script>

<template>
  <div class="bg-green-500 my-8 rounded-3xl py-12">
    <div class="text-gray-200 my-4">
      <p class="text-center text-xl font-bold">Our Costumers</p>
      <p class="text-center text-sm">See what our beloved customers said</p>
    </div>
    <div class="gap-2 mx-2 px-4 flex flex-wrap items-center justify-center">
      <Comment
        name="Bob B"
        :img="useImage('pp-1.png')"
        comment="The Lover's Retreat Package was the perfect escape for my partner and me. The secluded cabin was cozy, and the private hot tub added a magical touch to our evenings. We enjoyed starlit dinners by the fireplace, which made our getaway unforgettable."></Comment>
      <Comment
        name="Jake R"
        :img="useImage('pp-2.png')"
        comment="We had an amazing time on the Enchanted Island Escape. The white sandy beaches and crystal-clear waters were straight out of a dream. The candlelit beachside dinners and sunset cruises made our vacation truly romantic and memorable."></Comment>
      <Comment
        name="Sophia T"
        :img="useImage('pp-4.png')"
        comment="The Whispering Pines Honeymoon was everything we hoped for and more. The mountain views were breathtaking, and the outdoor adventures brought us closer together. The intimate lodge accommodations made our honeymoon perfect in every way"></Comment>
      <Comment
        name="Liam M"
        :img="useImage('pp-3.png')"
        comment="Our Sunset Cove Romance Tour was a beautiful journey along scenic beaches. We loved the romantic picnics, sunset walks, and luxury spa treatments. It was the perfect blend of relaxation and romance."></Comment>
    </div>
  </div>
</template>
