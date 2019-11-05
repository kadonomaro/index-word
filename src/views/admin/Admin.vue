<template>
  <div class="admin-wrapper">
    <app-admin />
  </div>
</template>

<script>

import AppAdmin from '@/components/admin/AppAdmin.vue';

export default {
  name: 'admin',
  components: {
    AppAdmin
  },
};
</script>
