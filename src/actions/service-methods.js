import firebase from 'firebase';
import { getUser } from '@/actions/user-authorization';
import Vuex from 'vuex';
import router from '@/router';
import axios from 'axios';

const authUser = Object.keys(window.localStorage).filter(item => item.startsWith('firebase:authUser'))[0]; // Firebase User in LocalStorage
const user = getUser();

export function putFireBase(url, payload, redirect) {
  axios.put(`https://cache-web-app.firebaseio.com/` + url + `.json?auth=RpudgLd3MY2o0MQkM52Maud6sydgxY0KybVnr10c`, payload, redirect)
  .then((response) => {
    if (redirect) {
      router.push(redirect);
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

export function postFireBase(url, payload) {
  axios.post(`https://cache-web-app.firebaseio.com/` + url + `.json?auth=RpudgLd3MY2o0MQkM52Maud6sydgxY0KybVnr10c`, payload)
  .catch((error) => {
    console.log(error);
  });
}

export function getFireBase(url) {
  axios.get(`https://cache-web-app.firebaseio.com/` + url + `.json?auth=RpudgLd3MY2o0MQkM52Maud6sydgxY0KybVnr10c`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}

export function getAPI(url) {
  axios.get(`http://www.amiiboapi.com/api/` + url)
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}
