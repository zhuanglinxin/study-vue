import Vue from 'vue'
import app from './App.vue'
import { Header,Swipe, SwipeItem ,Toast } from 'mint-ui'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router.js'

var vm = new Vue({
    el: '#app',
    render : c =>c(app),
    router
});