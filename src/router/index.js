import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard/Dashboard';
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
