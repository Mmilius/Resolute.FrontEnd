<template>
  <div class="home">
    <h3 class="about" @click="backtrack">Learn More Here</h3>
      <form @submit="addUser" class="new-user">
        <input class="form-input" type="text" placeholder="Email Address" name="username" />
        <input class="form-input" type="password" placeholder="Password" name="password"/>
        <input type="submit" class="add-user-button" value="Sign Up"/>
          <!-- <img class="main-image" alt="resolute" src="../assets/resolute.png"> -->
      </form>
       <form @submit="loginSubmit">
        <input class="form-input" type="text" placeholder="Email Address" name="username" />
        <input class="form-input" type="password" placeholder="Password" name="password"/>
        <input type="submit" class="login-button" value="Login"/>
      </form>
  </div>
</template>

<script>

import router from '../router';

export default {
  
data(){
  return {
    username: "",
    password: "",
  }
  },

 methods: {
      addUser(event){
          event.preventDefault()
          const formData = new FormData(event.target)
          this.$store.dispatch("addUser", {
              username: formData.get("username"),
              password: formData.get("password"),
          })
          event.target.reset()
      },
      loginSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        this.$store.dispatch("doLogin", {
           username: formData.get("username"),
           password: formData.get("password"),
        })
        event.target.reset()
      },
        backtrack(){
        router.push("/about")
      }
 }
}
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
}

.home{
  background-image: url("../assets/resolute.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  margin-top: 15px;

form{
   position: center;

  input{ 
    margin: 5px;
    margin-top: 50px;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #474787 solid;
  }
}
}
  .add-user-button{
    background-color:  #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
  }
  .add-user-button:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 0.85rem;
    cursor: pointer;
  }

  .login-button{
    background-color:  #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
  }

  .login-button:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 0.88rem;
    cursor: pointer;
  }



  
  .main-image{
    width: 100%;
    position: center;

  }

  .about{
  color: white;
  cursor: pointer;
  margin-bottom: -20px;
  padding: 15px;
  background-color: #9e5af8;
  }

  .about:hover{
    background-color: white;
    color: #9e5af8;
     border: 5px #9e5af8 solid;
     padding: 10px;
  }



  
</style>