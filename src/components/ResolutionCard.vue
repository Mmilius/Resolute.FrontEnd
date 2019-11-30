<template>
    <div class="resolution-card">
    <section class="resolution-section">
        <img class="resolution-image" v-bind:src="resolution.image"/>
         <h3>{{resolution.realm.realm}}</h3>
        <h3>{{resolution.goal}}</h3> 
        <h3>My motivation: {{resolution.motivation}}</h3>
        <button @click="$emit('report-resolution', id)" class="report-button">Make a Report</button>
        <br>
        <br>
        <font-awesome-icon icon="edit"  @click="$emit('edit-resolution', resolution.id)" class="edit-button" />
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
    index: {
        type: Number,
    },

    data(){
        return {
            "id": this.resolution.id,
            "goal": this.resolution.goal,
            "motivation": this.resolution.motivation,
        }
    },
    methods: {
        deleteResolution(id){
            this.$emit('deleteResolution', id)
        }
    }
}
</script>

<style scoped>
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



</style>