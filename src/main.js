import Vue from 'vue'
import App from './src/widgets/App.vue'
import Commons from './src/widgets/commons';

Commons.forEach(component => {
    Vue.component(component.name, component);
});

new Vue({
  el: '#app',
  router:  require('./router/index.js').default,
  render: h => h(App)
})
