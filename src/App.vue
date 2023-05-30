<script>

//axios

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      projects: [],

    }
  },

  created() {
    this.getProjects();
  },

  
  methods: {
    getProjects() {
      //chiamata 
      axios.get('http://127.0.0.1:8000/api/projects').then(response => {
        console.log(response.data.results);
        this.projects = response.data.results;
        console.log(this.projects);
      })
    }
  }

}
</script>

<template>
  <div class="container p-5">

    <h1>All Projects</h1>
  
    <hr>
  
    
      
    <div class="card_container d-flex gap-5 flex-wrap justify-content-center">
      <div class="card" style="max-width: 18rem;" v-for="project in projects">
        <h4 class="text-center">{{ project.title }}</h4>
        <div> {{ project.description }} </div>
      </div>
    </div>
      
    
  </div>
</template>


<style scoped>
</style>