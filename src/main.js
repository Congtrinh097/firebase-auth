import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
import router from "./routes/index";
import store from "./store";

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCUAwb_NUEdtHfZgll8KBK5_PBQgqyuGpM",
  authDomain: "myself-b566d.firebaseapp.com",
  databaseURL: "https://myself-b566d.firebaseio.com",
  projectId: "myself-b566d",
  storageBucket: "myself-b566d.appspot.com",
  messagingSenderId: "20072697511",
  appId: "1:20072697511:web:6326db8215718c89b6d582"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
