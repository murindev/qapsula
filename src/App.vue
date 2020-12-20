<template>
  <div id="app">
    <header-section/>
    <router-view/>
    <footer-section/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HeaderSection from '@/components/Header.vue';
  import FooterSection from '@/components/Footer.vue';
  import SG from '@/components/_sg.vue';


  @Component({
    components: {
      HeaderSection, SG, FooterSection,
    },
  })
  export default class App extends Vue {}
</script>
<style>
  @import "assets/style/style.css";
</style>
