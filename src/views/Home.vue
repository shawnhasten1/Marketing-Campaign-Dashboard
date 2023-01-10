<template>
  <div id="home">
    <Navbar />
    <MainContent title="Campaigns"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainContent from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    Navbar,MainContent
  }
}
</script>

<style>
</style>
