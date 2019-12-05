<template>
    <div>
        <!-- <CreateResolution addResolution/> -->
    <button class="logout" @click="logout">Logout</button>
    <h3 @click='toggleForm' class="add-resolution-title">Click to Make New Resolution</h3>
    <div v-if="show" class="add-resolution">
      <form @submit="addResolution" class="new-resolution">
        <input class="form-input" type="text" placeholder="Goal" name="goal" />
        <textarea class="form-input" placeholder="What's your motivation?" name="motivation"></textarea>
        <input class="form-input" type="text" placeholder="Add a photo" name="image"/>

         <select class="dropdown" name="realm_id">
            <option class="dropdown-form-input" disabled value="">Please select a realm</option>
            <option class="dropdown-form-input" type="text" value="1" >Heart</option>
            <option class="dropdown-form-input" type="text" value="2">Mind</option>
            <option class="dropdown-form-input" type="text" value="3">Soul</option>
        </select> 
        <!-- <input class="form-input" type="text" placeholder="realm_id" name="realm_id"/> -->
        <!-- <input class="form-input" type="text" name="user_id" :value="user_id"/> -->
        <input type="submit" class="add-resolution-button" value="Add Resolution"/>
      </form>
      </div>
        <!-- <div v-bind:key="resolution.id" v-for="resolution in resolutions"> -->
        <ResolutionCard v-bind:key="resolution.id" 
        v-for="(resolution) in resolutions" 
        :resolution="resolution" 
        @deleteResolution="deleteResolution"
        @editResolution="editResolution"
        @report-resolution="reportResolution"
        />
    </div>
    <!-- </div> -->
</template>
<script>

// import CreateResolution from '../components/CreateResolution.vue';
import ResolutionCard from '../components/ResolutionCard.vue';

import router from '../router';

export default {
    data(){
        return{
            show: false,
        }
    },
    name: "Resolutions",
    components: {
        ResolutionCard,
        // CreateResolution,
    },
    computed: {
        resolutions(){
            return this.$store.state.resolutions
    },
    user_id(){
      return this.$store.state.user_id
    }
  },
   mounted(){
    this.$store.dispatch("fetchResolutions")
  },
  methods: {
      addResolution(event){
          event.preventDefault()
          const formData = new FormData(event.target)
          this.$store.dispatch("addResolution", {
              goal: formData.get("goal"),
              motivation: formData.get("motivation"),
              image: formData.get("image"),
              realm_id: formData.get("realm_id"),
              user_id: localStorage.getItem("setUser")

          })
          event.target.reset()
          window.location.reload()
      },
      toggleForm(){
          this.show !== true
          ? this.show = true
          : this.show = false
      },

      deleteResolution(id){
        this.$store.dispatch("deleteResolution", id)
           window.location.reload()
      },

      editResolution(resolution){
        this.$store.dispatch("editResolution", resolution)
        // window.location.reload()
      },

      logout(){
        this.$store.dispatch("logout")
      },

      reportResolution(id){
         localStorage.setItem("resolution", id)
         router.push("/reports")
      }
      
  },
}
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
}

.logout{
  margin: 15px;
  background-color:  #474787;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  font-size: 10px;
  padding: 10px;

}

.logout:hover{
  background-color: white;
  color:#474787;
  border: 1px #474787 solid;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

form{
  width: 400px;
  input{ 
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #474787 solid;

  }
  textarea{
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #474787 solid;
  }

  .dropdown{
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    width: 100%;
  }
  .add-resolution-button{
    background-color:  #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
  }
  .add-resolution-button:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 0.9rem;
    cursor: pointer;
  
  }
}

.add-resolution{
  display: flex;
  justify-content: center;
}

.add-resolution-title{
    color:#474787;
    background-color: #474787;
    color: white;
    padding: 5px;
    border-radius: 5px;
}

.add-resolution-title:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
}
</style>