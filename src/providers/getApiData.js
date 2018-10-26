import { get, post } from './api';

// 获取所有城市列表

export const groupList = (params) => get('/v1/cities',params);


