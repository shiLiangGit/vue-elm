import {
    RECORD_USERINFO,
    RECORD_ADDRESS,
    SAVE_GEOHASH
} from './mutation-types';
import { setStore, getStore } from "../config/mUtils";

export default {
    // 记录定位经纬度
    [RECORD_ADDRESS](state,{ latitude,longitude }){
        state.latitude = latitude;
        state.longitude = longitude;
    },
    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true;
        setStore('user_id', info.user_id);
    },
    // 保存geohash数据到localStorage
    [SAVE_GEOHASH](state,geohash){
        state.geohash = geohash;
    }
}