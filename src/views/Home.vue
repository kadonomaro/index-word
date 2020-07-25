<template>
  <div class="home">
    <app-header />
    <main-layout />
  </div>
</template>

<script>

import AppHeader from '@/components/partials/Header.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'home',
  components: {
    MainLayout,
    AppHeader
  },
};
</script>
