<script>

import axios from 'axios';
export default {
  name: 'SingleItem',
  data() {
    return {
        project: {},
        projectSlug: '',
    }
  },
  mounted() {
    this.projectSlug = this.$route.params.slug;
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(res => {
        this.project = res.data.project;
        console.log(res.data.project);
      })
    },
  }
}
</script>

<template>

    <section id="single-item">

            <h3>{{ project.title }}</h3>
            <h4>
                {{ project.type ? project.type.title : 'No categories' }}
            </h4>
            <div class="technologies">
                <span v-for="technology in project.technologies" class="badge rounded-pill py-2 mx-1" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
            </div>
            <p> {{ project.description }} </p>
            <hr>

    </section>

</template>

<style lang="scss" scoped>

    #single-item {
        padding: 10rem;
        width: 100%;
        overflow-y: auto;
    }
</style>