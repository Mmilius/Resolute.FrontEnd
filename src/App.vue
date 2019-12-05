<template>
  <div id="app">
    <Header />
    <div id="nav">
    <!-- <router-link to="/about">About</router-link>  -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Header,
}, 
methods: {


  logout(){
        this.$store.dispatch("logout")
      },
}
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    a{
      text-decoration: none;
      font-size: 20px;
      color:#474787;
      padding: 10px;
      margin: 20px;
      border-radius: 3px}
  
}


#nav a{
 text-decoration: none;
 font-size: 20px;
 color:#474787;
 padding: 10px;
 margin: 20px;
 border-radius: 3px
}


</style>
