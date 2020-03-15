import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//import HompePage from './components/HomePage';
import routes from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter)

// 3. Create the router
const router = new VueRouter({routes});
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: HomePage },
//   ]
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
