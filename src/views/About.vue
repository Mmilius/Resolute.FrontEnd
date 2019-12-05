<template>
  <div class="about">
      <h3 class="join" @click="backtrack">Join the Resolution!</h3>
    <h2 class="content">Your year, your resolutions. Make it great!</h2>
    <img src="../assets/heart.png">
    <h2>Heart</h2>
    <p>Something cool</p>
     <img src="../assets/mind.png">
     <h2>Mind</h2>
     <p>Something cool</p>
     <img src="../assets/soul.png">
       <h2>Soul</h2>
     <p>Something cool</p>
  </div>
</template>


<script>

import router from '../router';

export default {
  
  methods:{
     backtrack(){
        router.push("/")
      }

  }
}
</script>

<style scoped>
.join{
  color: white;
  cursor: pointer;
  margin-bottom: -20px;
  padding: 15px;
  background-color: #9e5af8;
  }

  .join:hover{
    background-color: white;
    color: #9e5af8;
     border: 5px #9e5af8 solid;
     padding: 10px;
  }
  .content{
    padding: 15px;
  }

</style>