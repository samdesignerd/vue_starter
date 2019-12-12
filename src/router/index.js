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
      const componentName = route.component
      route.component = require(`../widgets/pages/${route.component}/p-layout.vue`).default
      if (route.children) {
        route.children.map((child) => {
          child.component = require(`../widgets/pages/${componentName}/${child.component}/m-layout.vue`).default
          return child
        })
      }
    }
    return route
  })
})
