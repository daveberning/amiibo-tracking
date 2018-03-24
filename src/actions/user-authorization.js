import firebase from 'firebase';
import axios from 'axios';
import router from '@/router';

const authUser = Object.keys(window.localStorage).filter(item => item.startsWith('firebase:authUser'))[0]; // Firebase User in LocalStorage

export function logUserOut() {
  firebase.auth().signOut().then(() => {
    localStorage.removeItem(authUser);
    localStorage.removeItem('cache-user');
    router.push('/login');
  },(error) => {
    console.log('something went wrong');
  });
}

export function logUserIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    router.push('/');
  })
  .catch(() => {
    console.log('sign in failed');
  });
}

export function storeUser(user) {
  localStorage.setItem('cache-user', JSON.stringify(user));
}

export function isUserLoggedIn() {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      router.push('/login');
      return;
    }
  });
}

export function createUser(email, password, redirect) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    const payload = {
      email: email
    }
    putFireBase('users/' + firebase.auth().currentUser.uid, payload, redirect);
    storeUser(payload);
  });
}

export function updateUser(user) {
  putFireBase('user', user);
  localStorage.setItem(authUser, JSON.stringify(user));
}

export function getUser() {
  if (!firebase.apps.length) {
    var config = {
      apiKey: "AIzaSyBnOFCOwwUQcIiRi2UNcfXEL_L33zg04B4",
      authDomain: "amiibo-ce7b4.firebaseapp.com",
      databaseURL: "https://amiibo-ce7b4.firebaseio.com",
      projectId: "amiibo-ce7b4",
      storageBucket: "amiibo-ce7b4.appspot.com",
      messagingSenderId: "813046227223"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        axios.get(`https://cache-web-app.firebaseio.com/users/` + user.uid + `.json?auth=RpudgLd3MY2o0MQkM52Maud6sydgxY0KybVnr10c`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      }
    });
  }
  // return firebase.auth().currentUser;
}
