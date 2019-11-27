<template>
    <div class="resolution-card">
    <section class="resolution-section">
        <img class="resolution-image" v-bind:src="resolution.image"/>
        <h3>{{resolution.goal}}</h3> 
        <h3>My motivation: {{resolution.motivation}}</h3>
        <button @click="$emit('report-resolution', resolution.id)" class="report-button">Make a Report</button>
        <button @click="$emit('edit-resolution', resolution.id)" class="edit-resolution-button">Edit Resolution</button>
        <button @click="$emit('delete-resolution', resolution.id)" class="delete-button">x</button>
    </section>
    </div>
</template>

<script>
export default {
    props: ["resolution"]
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap');
.resolution-image{
    width: 150px;
}

.resolution-section{
    display: flex;
    justify-content: space-evenly;
    border: 1px black solid;
    margin: 25px;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Noto Sans SC', sans-serif;
}

.report-button{
    background-color: #474787;
    color: white;
    margin: 15px;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Noto Sans SC', sans-serif;

}

.report-button:hover{
  background-color:white;
    color:#474787;
     border: 3px #474787 solid;
}


</style>