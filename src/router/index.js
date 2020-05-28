import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Homepage from "../pages/Homepage.vue"
import DragDropGame from "../pages/DragDropGame.vue"



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "Homepage",
      component: Homepage
    },
    {
      path: '/dogrusunu-bul',
      name: "DragDropGame",
      component: DragDropGame
    },
    
  ]
})
