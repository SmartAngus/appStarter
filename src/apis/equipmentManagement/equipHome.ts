/**
 * 设备管理 > 首页
 */
import { client } from '@/helpers/request'

const baseUrl = 'equipmentManagerment/equipHomePage'
// 设备管理首页模板下查询展示
export const requestGetEquipHomeData = (data) => client.post(`${baseUrl}/getEquipHomePage`, data)
// 保存实际值
export const saveRealValue = (data) => client.post(`${baseUrl}/saveRealValue`, data)
// 保存目标值
export const saveTarageValue = (data) => client.post(`${baseUrl}/saveTargetValue`, data)
// 获取实际值
export const getRealValue = (data) => client.post(`${baseUrl}/getRealValue`, data)
// 获取目标值
export const getTargetValue = (data) => client.post(`${baseUrl}/getTargetValue`, data)
