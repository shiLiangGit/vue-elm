// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'swiper/dist/css/swiper.min.css';
import Vue from 'vue'
import App from './App';
import store from './store/';
import router from './router'
import './config/rem'
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    axios,
    components: {App},
    template: '<App/>'
})
