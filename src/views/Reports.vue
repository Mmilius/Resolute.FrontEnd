<template>
    <div class="report-card">
        

    </div>


</template>


<script>
export default {
    data(){
        return{
            show: false,
        }
    },
    name: "Reports",
    components: {
        
    },
    computed: {
        resports(){
            return this.$store.state.reports
    },
  },
   mounted(){
    this.$store.dispatch("fetchReports")
  }
}

</script>


<style scoped>

</style>