//importo i metodi

import {createRouter, createWebHistory} from 'vue-router';

//importo il componente
import Homepage from './pages/Homepage.vue';

//import il componente dei progetti
import ProjectList from './pages/ProjectList.vue';

//about
import AppAbout from './pages/AppAbout.vue';

//singolo progetto
import SingleItem from './pages/SingleItem.vue';

const router = createRouter({
    history: createWebHistory(),

    //creo un array di rotte.
    routes: [
        {
          path: '/',
          name: 'home',
          //componente
          component: Homepage,
        },

        //lista dei progetti
        {
            path:'/projects',
            name: 'projectList',
            component: ProjectList,
        },

        //about
        {
            path:'/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: SingleItem,
        },
    ],

});

export {router};