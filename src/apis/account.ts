/**
 * @File: 账户相关接口
 */
import client from '@/utils/http';

// 登录
export function fetchLogin(params) {
  return client.post('/system/user/login', params);
}
// 获取用户权限信息，权限菜单 + 用户信息
export function fetchAccountInfo(params) {
  return client.post('/system/user/getUserInfo', params);
}
// 退出登录
export function fetchLogout(params) {
  return client.post('/system/user/logout', params);
}
// 修改密码
interface UpdatePasswordParamProps {
  account: string;
  newPassword: string;
  oldPassword: string;
}
export function fetchUpdatePassword(params: UpdatePasswordParamProps) {
  return client.post('/system/user/updatePassword', params);
}

// 修改自定义首页菜单
export function updateMenuCode(params) {
  return client.post('/system/user/updateUserMainMenuCode', params);
}
