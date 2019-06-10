import Vue from 'vue'
import App from './components/App.vue'

new Vue({
  el: '#app',
  router:  require('./router/index.js').default,
  render: h => h(App)
})
