<template>
    <div>
        <div v-bind:key="resolution.id" v-for="resolution in resolutions">
            <ResolutionCard v-bind:resolution="resolution" v-on:del-resolution="emit('del-resolution', resolution.id)"/>
    </div>
    </div>
</template>
<script>

import ResolutionCard from '../components/ResolutionCard.vue';

export default {
    name: "Resolutions",
    components: {
        ResolutionCard
    },
    computed: {
        resolutions(){
            return this.$store.state.resolutions
    },
  },
   mounted(){
    this.$store.dispatch("fetchResolutions")
  },
}
</script>

<style scoped>

</style>