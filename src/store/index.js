import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);
const state = {
    latitude: '', // 当前位置纬度
    longitude: '', // 当前位置经度
    userInfo: null, //用户信息,
    geohash:null,  //经纬度数据
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})