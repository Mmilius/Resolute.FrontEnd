<template>
    <div>
         <CreateResolution v-on:submit="addResolution" v-bind:submit="addResolution" />
        <div v-bind:key="resolution.id" v-for="resolution in resolutions">
            <ResolutionCard v-bind:resolution="resolution" v-on:del-resolution="emit('del-resolution', resolution.id)"/>
    </div>
    </div>
</template>
<script>

import CreateResolution from '../components/CreateResolution.vue';
import ResolutionCard from '../components/ResolutionCard.vue';

export default {
    name: "Resolutions",
    components: {
        ResolutionCard,
        CreateResolution,
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
      }
  },
}
</script>

<style scoped>

</style>