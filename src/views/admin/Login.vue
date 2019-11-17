<template>
  <div class="admin-wrapper">
    <app-login />
  </div>
</template>

<script>

import AppLogin from '@/components/admin/AppLogin.vue';

export default {
  name: 'login',
  components: {
    AppLogin
  },
};
</script>
