import { get, post } from './api';

// 获取所有城市列表
export const groupList = (params) => get('/v1/cities',params);
// 获取热门城市列表
export const hotCities = (params) => get('/v1/cities',params);
// 获取当前城市
export const currentCity = (params) => get('/v1/cities',params);
// 获取所选城市信息
export const chooseCity = cityId => get('/v1/cities/' + cityId)
// 获取发送的位置信息
export const sendPosition = (params) => get('/v1/pois',params);
// 获取经纬度详细信息
export const msiteAddress = (geohash) => get('/v2/pois/' + geohash);
//获取图片验证码
export const getcaptchas = () => post('/v1/captchas', {});
// 用户名登录
export const accountLogin = (params) => post('/v2/login',params);
// 食品分类列表
export const msiteFoodTypes = (params) => get('/v2/index_entry', params);
// 获取商铺列表
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
    let supportStr = '';
    support_ids.forEach(item => {
        if (item.status) {
            supportStr += '&support_ids[]=' + item.id;
        }
    });
    let data = {
        latitude,
        longitude,
        offset,
        limit: '10',
        'extras[]': 'activities',
        keyword: '',
        restaurant_category_id,
        'restaurant_category_ids[]': restaurant_category_ids,
        order_by,
        'delivery_mode[]': delivery_mode + supportStr
    };
    return get('/shopping/restaurants', data);
};