import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: 'landing-page',
  },
  {
    path: '*',
    component: '404',
  },
]

export default new Router({
  routes: routes.map((route)=>{
    if (route.component) {
      route.component = require(`../components/pages/${route.component}/p-layout.vue`).default
    }
    return route
  })
})
