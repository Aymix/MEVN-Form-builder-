<template>
    <div class="row mt-5">
        <div class="col-lg-6 p-4">
            <h1>Sign in to create your dynamic Forms</h1>
            <p>If you dont have and account  <router-link class=" f-w-500" to="register">Register</router-link></p>
        </div>
        <div class="col-lg-6 p-4">
          <AuthForm :style="'login'" />
        </div>
    </div>
</template>

<script>

  import AuthForm from '@/components/auth/AuthForm.vue';

  export default {
    components: {
      AuthForm,
    }
  }
</script>
