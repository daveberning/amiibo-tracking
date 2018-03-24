import Vue from 'vue';
import Vuex from 'vuex';
import dashboard from '@/components/Dashboard/actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dashboard: dashboard
  }
});

export default store;
