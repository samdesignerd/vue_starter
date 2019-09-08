import Vue from 'vue'
import App from './components/App.vue'
import commons from './components/commons';

commons.forEach(component => {
    Vue.component(component.name, component);
});

new Vue({
  el: '#app',
  router:  require('./router/index.js').default,
  render: h => h(App)
})
