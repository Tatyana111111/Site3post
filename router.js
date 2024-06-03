import{createRouter, createWebHashHistory} from "vue-router";
import TheComponentOne from "./TheComponentOne.vue";
import TheComponentTwo from "./TheComponentTwo.vue";
import TheComponentThree from "./TheComponentThree.vue";


export default createRouter({
  history: createWebHashHistory(),
  routes:[
    {path: '/one', component: TheComponentOne, alias: '/'},
    {path: '/two', component: TheComponentTwo},
    {path: '/three', component: TheComponentThree},

  ]





})