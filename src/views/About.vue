<template>
  <div class="about">
      <h3 class="join" @click="backtrack">Join the Resolution!</h3>
    <h2 class="content">Your year, your resolutions. Make it great! </h2>
    <h2> Be Resolute</h2>
    <p> Consider how you want your heart (physical health), your mind (knowledge), and your soul (social life) to improve.</p>
    <p>Record your resolutions with your motivation and an image to inspire you.</p>
    <p>As the year passes, report on your progress. How is it going? What's challenging you? What have you learned? At the end of the year, review your journey and see how you've changed.</p>
   <div class="block">
    <img class="image" src="../assets/heart.png">
    <h2 class="title">Heart</h2>
    <p>Make a resolution to improve your physical health.</p>
     <img class="image" src="../assets/mind.png">
     <h2 class="title">Mind</h2>
     <p>Expand your mind this year. Learn more. Be more.</p>
     <img class="image" src="../assets/soul.png">
       <h2 class="title">Soul</h2>
     <p>Step outside your comfort zone and expand your social life. Get out and explore your world.</p>
  </div>
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
*{
  box-sizing: border-box;
}


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

  .image{
    width: 20%;
    padding: -20px;
    margin-bottom: -45px;
    margin-top: -15px;
  }

  .block{
    display: flex;
    flex-direction: column;
    align-items: center;
  
    
  }

  .title{
    margin-bottom: -15px;
  }

 

</style>