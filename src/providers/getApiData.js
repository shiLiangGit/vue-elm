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
//获取图片验证码
export const getcaptchas = () => post('/v1/captchas', {});
// 用户名登录
export const accountLogin = (params) => post('/v2/login',params);