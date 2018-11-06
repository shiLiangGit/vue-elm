import Vue from 'vue'
import Router from 'vue-router'
import location from '../pages/location/location';
import login from '../pages/login/login';
import forget from '../pages/forget/forget';
import city from '../pages/city/city';
import home from '../pages/home/home';
import food from '../pages/food/food';
import shop from '../pages/shop/shop';
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
            path:'/city/:cityId',
            name:'city',
            component:city
        },
        {
            path:'/food',
            name:'food',
            component:food
        },
        {
            path:'/shop',
            name:'shop',
            component:shop
        }
    ]
})
