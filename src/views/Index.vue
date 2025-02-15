<script setup>
import MainPage from "../components/MainPage.vue";
import Partner from "../components/Partner.vue";
import DestinationList from "../components/DestinationList.vue";
import PackageList from "../components/PackageList.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import CommentList from "../components/CommentList.vue";
import OurTeamList from "../components/OurTeamList.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container">
    <MainPage></MainPage>
    <Partner></Partner>
    <WhyChooseUs></WhyChooseUs>
    <DestinationList></DestinationList>
    <PackageList></PackageList>
    <CommentList></CommentList>
    <OurTeamList></OurTeamList>
    <Footer></Footer>
  </div>
</template>
