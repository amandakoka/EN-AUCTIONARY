<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </div>
</template>

<script>
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

export default {
  components: {
    Login,
    Home
  }
}
</script>