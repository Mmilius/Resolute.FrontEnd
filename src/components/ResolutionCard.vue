<template>
    <div class="resolution-card">
    <section class="resolution-section">
         <div v-if="show" class="edit-resolution">   
      <form @submit="editResolution" class="modified-resolution">
          <div name="edit-header"> 
              <h3 class="edit-title">Edit Your Resolution</h3>
        <font-awesome-icon icon="window-close" @click="toggleEditForm" class="cancel"/>
        </div>
        <input class="form-input" type="hidden" name="id" :value="resolution.id"/>
        <input class="form-input" type="hidden" name="user_id" :value="resolution.user_id"/>

        <input class="form-input" type="text" name="image" :value="image"/>
        <!-- <input class="form-input" type="text" name="realm_id" :value="realm"/> -->

        <select class="dropdown" name="realm_id">
            <option class="dropdown-form-input" disabled value="">Please select a realm</option>
            <option class="dropdown-form-input" type="text" value="1" >Heart</option>
            <option class="dropdown-form-input" type="text" value="2">Mind</option>
            <option class="dropdown-form-input" type="text" value="3">Soul</option>
        </select> 


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
        editResolution(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            this.$emit("editResolution", {
                id: formData.get("id"),
                goal: formData.get("goal"),
                motivation: formData.get("motivation"),
                image: formData.get("image"),
                realm_id: formData.get("realm_id"),
                user_id: formData.get("user_id")
            })
            event.target.reset()
            window.location.reload()
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

.edit-resolution{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

}

.edit-title{
    padding: 9px;
    background-color: #33d9b3;
    color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    font-weight: bold
}

form{
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #33d9b3;
  padding: 15px;
  border-radius: 5px;
  
  input{ 
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #33d9b3 solid;
  }
  textarea{
    display: block;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #33d9b3 solid;
  }
  .edit-resolution-button{
    background-color: #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
  }
  .edit-resolution-button:hover{
    background-color: white;
    color: #474787;
    border: 3px #474787 solid;
    padding: 0.9rem;
    cursor: pointer;
    text-align: center;
  }

}

.cancel{
    color:#ff5252;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    float: right;
    margin-bottom: 5px;


}

.dropdown{
    margin-bottom: 0.5rem;
    padding: 50px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #33d9b3 solid;
}



</style>