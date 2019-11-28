<template>
    <div>
        <!-- <CreateResolution addResolution/> -->
    <h3 @click='toggleForm' class="add-resolution-title">Click to Make New Resolution</h3>
    <div v-if="show" class="add-resolution">
      <form @submit="addResolution" class="new-resolution">
        <input class="form-input" type="text" placeholder="Goal" name="goal" />
        <textarea class="form-input" placeholder="What's your motivation?" name="motivation"></textarea>
        <input class="form-input" type="text" placeholder="Add a photo" name="image"/>
        <input class="form-input" type="text" placeholder="realm_id" name="realm_id"/>
        <input class="form-input" type="text" placeholder="user_id" name="user_id"/>
        <input type="submit" class="add-resolution-button" value="Add Resolution"/>
      </form>
      </div>
        <div v-bind:key="resolution.id" v-for="resolution in resolutions">
        <ResolutionCard v-bind:resolution="resolution" v-on:del-resolution="emit('del-resolution', resolution.id)"/>
    </div>
    </div>
</template>
<script>

// import CreateResolution from '../components/CreateResolution.vue';
import ResolutionCard from '../components/ResolutionCard.vue';

export default {
    data(){
        return{
            show: false
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
              user_id: formData.get("user_id")
          })
          event.target.reset()
      },
      toggleForm(){
          this.show !== true
          ? this.show = true
          : this.show = false
      }
  },
}
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
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
}
</style>