<script>

//axios

import axios from 'axios';

//card
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'AppMain',
  data() {
    return {
      apiURL: 'http://127.0.0.1:8000/api/projects',

      projects: [],

    }
  },

  components: {
    ProjectCard,
  },

  mounted() {
    this.getProjects(this.apiURL);
  },

  
  methods: {
    getProjects(apiURL) {
      //chiamata 
      axios.get(apiURL).then(response => {
        // console.log(response.data.results);
        this.projects = response.data.results;
        // console.log(this.projects);
      })
    }
  }

}
</script>

<template>
  <div class="container p-5">

    <h1>All Projects</h1>
  
    <hr>

    <!-- project card -->
    <div class="card_container d-flex gap-5 flex-wrap justify-content-center">

      <div v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

  
    
      
   
      
    
  </div>
</template>


<style scoped>
</style>