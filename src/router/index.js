import Vue from 'vue'
import Router from 'vue-router'
import location from '../pages/location/location';
import login from '../pages/login/login';
import forget from '../pages/forget/forget';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'location',
            component: location
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
        }
    ]
})
