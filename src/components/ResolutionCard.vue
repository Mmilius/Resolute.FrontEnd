<template>
    <div class="resolution-card">
    <section class="resolution-section">
         <div v-if="show" class="edit-resolution">
      <form @submit="editResolution" class="modified-resolution">
        <input class="form-input" type="text" name="image" :value="image"/>
        <input class="form-input" type="text" name="realm_id" :value="realm"/>
        <input class="form-input" type="text" name="goal" :value="goal" />
        <textarea class="form-input" name="motivation" :value="motivation"></textarea>
        <input type="submit" class="edit-resolution-button" value="Save Edits"/>
      </form>
      </div>
        <img class="resolution-image" v-bind:src="resolution.image"/>
         <h3>{{resolution.realm.realm}}</h3>
        <h3>{{resolution.goal}}</h3> 
        <h3>My motivation: {{resolution.motivation}}</h3>
        <button @click="$emit('report-resolution', id)" class="report-button">Make a Report</button>
        <br>
        <br>
        <font-awesome-icon icon="edit"  @click="toggleEditForm" class="edit-button" />
        <font-awesome-icon icon="trash" @click="deleteResolution(resolution.id)" class="delete-button" />
        
</section>
    </div>
</template>

<script>
export default {
    props: {
        resolution: {
            type: Object,
            required: true,
        }
    },

    data(){
        return {
            show: false,
            "id": this.resolution.id,
            "goal": this.resolution.goal,
            "motivation": this.resolution.motivation,
            "image": this.resolution.image,
            "realm": this.resolution.realm.realm,
        }
    },
    methods: {
        deleteResolution(id){
            if(confirm('Delete this resolution?'))
            this.$emit('deleteResolution', id)
        },
         toggleEditForm(){
          this.show !== true
          ? this.show = true
          : this.show = false
      },
        editResolution(resolution){
            this.$emit("editResolution", resolution)
        },
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap');
.resolution-image{
    width: 150px;
}

.resolution-section{
    /* display: flex;
    justify-content: space-evenly; */
    border: 3px #474787 solid;
    margin: 25px;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Noto Sans SC', sans-serif;
}

/* h3{
    text-decoration: underline;
} */

.report-button{
    background-color: #474787;
    color: white;
    margin: 15px;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Noto Sans SC', sans-serif;
    width: 300px;
    padding: 20px;
    font-size: 25px;

}

.report-button:hover{
    background-color:white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 18px;
    cursor: pointer;
}

.edit-button{
    margin-left: 1rem;
    color:#33d9b2;
    font-size: 20px;
    cursor: pointer;
    background-color:white;
    padding: 9px;
    border-radius: 50%;

}

.edit-button:hover{
    background-color:#33d9b2;
    color: white;
}

.delete-button{
    margin-left: 1rem;
    color:#ff5252;
    font-size: 20px;
    cursor: pointer;
    background-color:white;
    padding: 9px;
    border-radius: 50%;
}

.delete-button:hover{
    /* background-color:#b33939; */
    background-color:#ff5252;
    color:white;
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
  .edit-resolution-button{
    background-color:  #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
  }
  .edit-resolution-button:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 0.9rem;
    cursor: pointer;
  
  }
}


</style>