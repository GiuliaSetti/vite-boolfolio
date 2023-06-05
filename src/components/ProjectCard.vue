<script>

export default {
  name: 'ProjectCard',
  data() {
    return {
      
    }
  },
  props: {
    project: Object,
  },

  computed: {
    description() {
      if(this.project.description.length > 50) {

        return this.project.description.substring(0, 50) + '...';

      } else {

        return this.project.description;

      }

    }
  },

  

  

  

}

</script>

<template>
    <div >
      <div class="card p-3 d-flex flex-column justify-content-between" style="max-width: 15rem; height: 20rem;">  
        <h4 class="text-center">{{ project.title }}</h4>
        <p>
          {{ description }}
        </p>
        <div class="text-center py-2"> Repository: <b>{{ project.repository }} </b> </div>
       
        <router-link class="btn btn-primary" :to="{name: 'projects-show', params: {slug: project.slug}}">Show More</router-link>
       
      </div>
    </div>
</template>


<style>
</style>