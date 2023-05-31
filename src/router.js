//importo i metodi

import {createRouter, createWebHistory} from 'vue-router';

//importo il componente
import Homepage from './pages/Homepage.vue';

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
    ],

});

export {router};