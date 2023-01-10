<template>
  <div id="home">
    <Navbar />
    <MainContent title="Campaigns"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainContent from '@/components/Main.vue'
import {authUser} from '@/utils'

export default {
  name: 'Home',
  components: {
    Navbar,MainContent
  },
  beforeMount(){
      authUser()
  }
}
</script>

<style>
</style>
