<template>
  <div>
    <MainGrid msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainGrid from '@/components/Maingrid.vue'

export default {
  name: 'Home',
  components: {
    MainGrid
  }
}
</script>
