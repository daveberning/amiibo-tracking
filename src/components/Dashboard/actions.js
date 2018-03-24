import axios from 'axios';
import { getAPI } from '@/actions/service-methods';

const dashboard = {
  namespaced: true,
  state: {
    amiibos: []
  },
  mutations: {
    GET_AMIIBOS (state, payload) {
      state.amiibos = payload
    }
  },
  actions: {
    getAmiibos ({ commit }, url) {
      console.log(url);
      axios.get(`http://www.amiiboapi.com/api/` + url)
      .then((response) => {
        commit('GET_AMIIBOS', response.data.amiibo);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}

export default dashboard;
