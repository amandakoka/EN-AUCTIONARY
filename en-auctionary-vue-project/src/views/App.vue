<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/items">Items</router-link>
      <router-link to="/login">Login</router-link>

    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';
import CreateAccount from './pages/CreateAccount.vue';
import Items from './pages/Items.vue';
import Item from './pages/Item.vue';


export default {
  components: {
    Login,
    Home,
    CreateAccount,
    Items,
    Item
  }
}
</script>