<script>
//header
  import AppHeader from './components/AppHeader.vue';
//main
  import AppMain from './components/AppMain.vue';

  export default {
    name: 'App',
    data() {
    },
    components: {
      AppHeader,
      AppMain,
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style scoped>
</style>