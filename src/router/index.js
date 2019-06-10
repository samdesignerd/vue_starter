import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: 'landing-page',
  },
]

// routes.push(...require('./routes/design.js').default)

export default new Router({
  routes: routes.map((route)=>{
    route.component = require(`../components/pages/${route.component}.vue`).default
    return route
  })
})
