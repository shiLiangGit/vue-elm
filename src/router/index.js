import Vue from 'vue'
import Router from 'vue-router'
import location from '../pages/location/location';
import login from '../pages/login/login';
import forget from '../pages/forget/forget';
import city from '../pages/city/city';
import home from '../pages/home/home';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'location',
            component: location
        },
        {
            path:'/home',
            name:'home',
            component:home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path:'/forget',
            name:'forget',
            component:forget
        },
        {
            path:'/city',
            name:'city',
            component:city
        }
    ]
})
