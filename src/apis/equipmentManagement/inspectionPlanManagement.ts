/**
 * 设备管理 > 点巡检计划管理
 */
import { client } from '@/helpers/request'

// 增加
export function savePlan(params) {
  return client.post('/equipmentManagerment/equipCheckup/plan/save', params)
}

// 删除
export function deletePlan(params) {
  return client.post('/equipmentManagerment/equipCheckup/plan/delete', params)
}

// 修改
export function updatePlan(params) {
  return client.post('/equipmentManagerment/equipCheckup/plan/update', params)
}

// 查询
export function getPlanList(params) {
  return client.post('/equipmentManagerment/equipCheckup/plan/list', params)
}

// 详情
export function detailPlan(params) {
  return client.get('/equipmentManagerment/equipCheckup/plan/detail', { params })
}

// 详情
export function changePlanStatus(params) {
  return client.post('/equipmentManagerment/equipCheckup/plan/status', params)
}
