/**
 * 设备管理 > 点巡检评价
 */
import { client } from '@/helpers/request'

// 点巡检评价展示全部数据
export function requestAllMonthData(params) {
  return client.post('/equipmentManagerment/equipPointEvaluate/getEquipPointEvaluate', params)
}
// 点巡检评价插入月份数据
export function saveMonthData(params) {
  return client.post('/equipmentManagerment/equipPointEvaluate/saveEquipEvaluateMonthly', params)
}
// 点巡检评价更新月份数据
export function updateMonthData(params) {
  return client.post('/equipmentManagerment/equipPointEvaluate/updateEquipEvaluateMonthly', params)
}
// 点巡检评价插入年度数据
export function saveYearData(params) {
  return client.post('/equipmentManagerment/equipPointEvaluate/saveEquipEvaluateYears', params)
}
// 点巡检评价更新年份数据
export function updateYearData(params) {
  return client.post('/equipmentManagerment/equipPointEvaluate/updateEquipEvaluateYears', params)
}
