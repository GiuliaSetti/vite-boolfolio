<script>

export default {
  name: 'ProjectCard',
  data() {
    return {
      
    }
  },
  props: {
    project: Object,
  }
}

</script>

<template>
    <div >
      <div class="card p-3" style="max-width: 18rem;">  
        <h4 class="text-center">{{ project.title }}</h4>
        <div> {{ project.description }} </div>
      </div>
    </div>
</template>


<style>
</style>