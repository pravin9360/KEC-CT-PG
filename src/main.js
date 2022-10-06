import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjZgZzvQKUHnnponyn0eqVRUy7h4KTfhw",
    authDomain: "vue-auth-yt-bdd08.firebaseapp.com",
    projectId: "vue-auth-yt-bdd08",
    storageBucket: "vue-auth-yt-bdd08.appspot.com",
    messagingSenderId: "667217828992",
    appId: "1:667217828992:web:2dcafd678909519ad5da65"
  };
  firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')