import {BASE_URI} from '@/config';
import axios from 'axios';
import {IUser} from '@/models/account';

export const GUESS_URL = BASE_URI + '/love/all';
// 首页列表
export const CHANNEL_URL = BASE_URI + '/love/lovers';

const USER_LOGIN_URL = '/user/login';

export function login(values: IUser) {
  console.log('api---login');
  return axios.request({
    baseURL: BASE_URI,
    url: USER_LOGIN_URL,
    method: 'post',
    data: values,
  });
}
