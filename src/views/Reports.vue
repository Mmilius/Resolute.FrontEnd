<template>
<div>
  <h3 class="backtrack" @click="backtrack"> Return to Resolutions</h3> 
    <div class="report-card">
    <div v-if="show" class="add-report">
      <form @submit="addReport" class="new-report">
         <h1 class="headline">Make a Report</h1>
        <input class="form-input" type="text" placeholder="What's the status?" name="status" />
        <textarea class="form-input" 
        placeholder="What's been challenging? What's stopping you from acheiving your resolution?" 
        name="challenges"></textarea>
         <textarea class="form-input" placeholder="What have you learned?" name="learned"></textarea>
        <input class="form-input" type="text" placeholder="Add a photo" name="image"/>
         <input type="submit" class="add-report-button" value="Add Report"/>
      </form>
    </div>
        <div class="report-cards">
          <h1 class="headline">Report Cards</h1>
        <ReportCard v-bind:key="report.id" 
        v-for="(report) in reports" 
        :report="report" 
        @deleteReport="deleteReport"
        @editReport="editReport"
        />
        </div>
    </div>
    </div>

</template>


<script>

import ReportCard from '../components/ReportCard.vue';

import router from '../router';

export default {
    data(){
        return{
            show: true,
        }
    },
    name: "Reports",
    components: {
        ReportCard,
        
    },
    computed: {
        reports(){
            return this.$store.state.reports
    },
  },
   mounted(){
    this.$store.dispatch("fetchReports")
  },
  methods: {
       addReport(event){
          event.preventDefault()
          const formData = new FormData(event.target)
          this.$store.dispatch("addReport", {
              status: formData.get("status"),
              challenges: formData.get("challenges"),
              learned: formData.get("learned"),
              image: formData.get("image"),
              resolution_id: localStorage.getItem("resolution")
          })
          event.target.reset()
          window.location.reload()
      },
       deleteReport(id){
        this.$store.dispatch("deleteReport", id)
           window.location.reload()
      },

      editReport(report){
        this.$store.dispatch("editReport", report)
        // window.location.reload()
      },
       logout(){
        this.$store.dispatch("logout")
      },
      backtrack(){
        router.push("/resolutions")
      }
  }
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
    padding: 2rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #474787 solid;
    text-align:left;
  }

  .add-report-button{
    background-color:  #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
  }
  .add-report-button:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 0.9rem;
    cursor: pointer;
  
  }
}

.add-report{
  display: flex;
  justify-content: space-evenly;
}

.add-report-title{
    color:#474787;
    background-color: #474787;
    color: white;
    padding: 5px;
    border-radius: 5px;
}

.report-card{
    display: flex;
    justify-content: space-evenly;
    background-image: url("../assets/rings.png");
    background-repeat: no-repeat;
    background-size: 90%;
}

.headline{
  color:#474787;
}

.backtrack{
  margin-top: -5px;
  color: #474787;
  cursor: pointer;
}

 .backtrack:hover{
    color: #9e5af8;
  }


</style>