<script setup>
import HeaderVue from '@/components/global/HeaderVue.vue'
import BannerVue from '@/components/BannerVue.vue'
import TopicsVue from './components/TopicsVue.vue'
import TitleVue from './components/TitleVue.vue'
import MainVue from './components/MainVue.vue'
import TextBlocksVue from './components/TextBlocksVue.vue'
import SubscribeVue from './components/SubscribeVue.vue'
import FooterVue from './components/global/FooterVue.vue'
</script>

<template>
  <HeaderVue />
  <main>
    <BannerVue />
    <TopicsVue />
    <TitleVue />
    <MainVue />
    <TextBlocksVue />
    <SubscribeVue />
  </main>
  <FooterVue />
</template>
