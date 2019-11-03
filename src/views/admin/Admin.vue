<template>
  <div class="admin">
    <h1>admin</h1>
    <admin-side />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import AdminSide from '@/components/admin/AdminSide.vue'
import AppArticles from '@/components/Articles.vue';

export default {
  name: 'admin',
  components: {
    AppArticles,
    AdminSide
  },
};
</script>
