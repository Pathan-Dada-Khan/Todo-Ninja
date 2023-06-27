import Vue from "vue";
import VueRouter from "vue-router";

import DashBoard from '@/pages/DashBoard.vue';
import MyProjects from '@/pages/MyProjects.vue';
import TheTeam from '@/pages/TheTeam.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: DashBoard },
        { path: '/projects', component: MyProjects },
        { path: '/team', component: TheTeam },
    ]
})