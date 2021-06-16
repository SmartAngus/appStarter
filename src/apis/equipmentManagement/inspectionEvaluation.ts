/**
 * 设备管理 > 点巡检任务
 */
import { client } from '@/helpers/request'

// 获取点巡检的任务类型的下拉
export function getCheckUpTaskTypeList(params) {
  return client.post('/equipmentManagerment/equipCheckup/task/getCheckUpTaskTypeList', params)
}

// 获取任务列表视图数据
export function fetchTaskListView(params) {
  return client.post('/equipmentManagerment/equipCheckup/task/list', params)
}
// 获取任务日历视图数据
export function fetchTaskCalendarView(params) {
  return client.post('/equipmentManagerment/equipCheckup/task/calendarTaskData', params)
}
// 获取设备管理点检巡任务模板数据
export function fetchTaskTemplate(params) {
  return client.post('/equipmentManagerment/equipCheckupTemplet/list', params)
}

// 修改点检巡检任务
export function fetchUpdateTask(params) {
  return client.post('/equipmentManagerment/equipCheckup/task/update', params)
}
// 获取任务详情
export function fetchDetailTask(params) {
  return client.get('/equipmentManagerment/equipCheckup/task/detail', { params })
}
// // 获取所有设备名称和设备编码
export function fetchAllDeviceNameOrCode(params) {
  return client.get('/equipmentManagerment/equipParameter/listEquipName', { params })
}

// 通过设备名称或者编码联动
export function fetchLinkDevice(params) {
  return client.get('/equipmentManagerment/equipParameter/getEquipByNameOrCode', { params })
}
// 通过设备id  查出所有设备负责人
export function fetchDeviceManager(params) {
  return client.get('/equipmentManagerment/equipParameter/getEquipManagerById', { params })
}

export function requestAllUserList() {
  return client.get('/equipmentManagerment/equipParameter/listUser')
}
// 通过任务编号查任务详情
export function requestTaskDetailByCode(params) {
  return client.get('/equipmentManagerment/equipCheckupTask/detailByCode', { params })
}
// 获取点巡检任务已检/应检/漏检数量
export function requestTaskListFoooterNum(params) {
  return client.post('/equipmentManagerment/equipCheckup/task/getInspection', params)
}
// 获取点检巡检任务详情-添加备件
export function requestSpareListNum(params) {
  return client.post('/equipmentManagerment/equipCheckup/task/detail/addSpare', params)
}
