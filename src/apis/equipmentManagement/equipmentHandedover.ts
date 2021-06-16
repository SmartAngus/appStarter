/**
 * 设备管理 > 设备交接班
 */
import { client } from '@/helpers/request'

const baseUrl = 'equipmentManagerment/equipHandover'
// 查询设备交接班历史
export const getEquipHandover = (data) => client.post(`${baseUrl}/getEquipHandover`, data)
// 查询点巡查异常情况
export const getEquipCheckupAbnormal = (data) => client.post(`${baseUrl}/getEquipCheckupAbnormal`, data)
// 查询点巡查故障情况
export const getEquipCheckupHitch = (data) => client.post(`${baseUrl}/getEquipCheckupHitch`, data)
// 同步点巡查异常情况
export const syncCheckupAbnormal = (data) => client.post(`${baseUrl}/syncCheckupAbnormal`, data)
// 同步点巡查故障情况
export const syncCheckupHitch = (data) => client.post(`${baseUrl}/syncCheckupHitch`, data)
// 保存交班情况
export const saveHandoverHistory = (data) => client.post(`${baseUrl}/saveHandoverHistory`, data)
// 更新交班情况
export const updateTakeoverHistory = (data) => client.post(`${baseUrl}/updateTakeoverHistory`, data)
//
