<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="ma-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>