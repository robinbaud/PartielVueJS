<template>
  <div id="app">
    <Listpage :list="list"/>
    
  </div>
</template>

<script>
import Listpage from './components/listpage.vue'
import {call} from './query'
export default {
  name: 'App',
  components: {
    Listpage,
  },
  data(){
    return{
      list: []
    }
  },
  async created(){
    this.list = await call();
    console.log(this.list)
  }
}
</script>

<style>
  
</style>
