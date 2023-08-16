<template>
  <div>
    <HelloWorld />
    <card-section />
    <custom-action-card />
    <LayOut />
    <nav-bar />
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import CardSection from "@/components/CardSection.vue";
import CustomActionCard from "@/components/CustomActionCard.vue";
import LayOut from "@/components/LayOut.vue";
</script>
