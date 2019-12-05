<template>
        <div>
        <div v-if="show" class="edit-report">   
      <form @submit="editReport" class="modified-report">
          <div name="edit-header"> 
              <h3 class="edit-title">Edit Your Report</h3>
        <font-awesome-icon icon="window-close" @click="toggleEditForm" class="cancel"/>
        </div>
        <input class="form-input" type="hidden" name="id" :value="id"/>
        <input class="form-input" type="hidden" name="resolution_id" :value="report.resolution_id"/>
        <input class="form-input" type="text" name="status" :value="status" />
        <textarea class="form-input" name="challenges" :value="challenges"></textarea>
         <textarea class="form-input" name="learned" :value="learned"></textarea>
        <input class="form-input" type="text" name="image" :value="image"/>
        <input type="submit" class="edit-report-button" value="Save Edits"/>
      </form>
      </div>

    <div class="report-card">
    <section class="report-section">
        <img class="report-image" v-bind:src="report.image"/>
        <h3>Status: {{report.status}}</h3> 
        <h3>Challenges: {{report.challenges}}</h3>
        <h3>Lessons Learned: {{report.learned}}</h3>
        <h3>Date: {{moment(report.created_at).format('MM-DD-YYYY')}}</h3>
        <font-awesome-icon icon="edit"  @click="toggleEditForm" class="edit-button" />
        <font-awesome-icon icon="trash" @click="deleteReport(report.id)" class="delete-button" />
    </section>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        report: {
            type: Object,
            required: true,
        }
    },

    data(){
        return {
            show: false,
            "id": this.report.id,
            "status": this.report.status,
            "challenges": this.report.challenges,
            "learned": this.report.learned,
            "image": this.report.image
        }
    },
    methods: {
        deleteReport(id){
            if(confirm('Delete this report?'))
            this.$emit('deleteReport', id)
        },
         toggleEditForm(){
          this.show !== true
          ? this.show = true
          : this.show = false
      },
         editReport(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            this.$emit("editReport", {
                status: formData.get("status"),
                challenges: formData.get("challenges"),
                learned: formData.get("learned"),
                image: formData.get("image"),
                id: formData.get("id"),
                resolution_id: formData.get("resolution_id")
            })
            event.target.reset()
            window.location.reload()
        },
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap');


.report-image{
    width: 150px;
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

.edit-report{
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
  .edit-report-button{
    background-color: #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
  }
  .edit-report-button:hover{
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

.report-section{
    display: inline-block;
    border: 3px #474787 solid;
    margin: 25px;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Noto Sans SC', sans-serif;
    width: 100%

}


</style>