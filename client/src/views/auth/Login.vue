<template>
  <auth-form :style="'login'" />
</template>

<script>
import { defineComponent } from 'vue'

import AuthForm from '@/components/auth/AuthForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    AuthForm
  }
})
</script>
