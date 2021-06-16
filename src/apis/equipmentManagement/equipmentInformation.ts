/**
 * @file 设备信息管理相关接口
 */
import { client } from '@/helpers/request'

// 获取归属单位下拉数据
export function fetchWorkshopData(params) {
  return client.get('/equipmentManagerment/equipParameter/alldeviceCompany', { params })
}

// 获取自定义标签下拉数据
export function fetchTagData(params) {
  return client.get('/equipmentManagerment/equipParameter/allCustomTag', { params })
}

// 获取设备列表
export function fetchEquipments(params) {
  return client.post('/equipmentManagerment/equipParameter/list', params)
}

// 新增设备
export function fetchCreateEquipment(params) {
  return client.post('/equipmentManagerment/equipParameter/insert', params)
}

// 删除设备
export function fetchDeleteEquipment(params) {
  return client.post('/equipmentManagerment/equipParameter/delete', params)
}

// 复制设备
export function fetchCopyEquipment(params) {
  return client.post('/equipmentManagerment/equipParameter/copy', params)
}

// 关注设备
export function fetchFocusEquipment(params) {
  return client.post('/equipmentManagerment/equipParameter/updateAttention', params)
}

// 禁用启用设备
export function fetchChangeEquipmentStatus(params) {
  return client.post('/equipmentManagerment/equipParameter/updateStatusInfo', params)
}

// 获取设备基础信息
export function fetchEquipmentBaseInfo(params) {
  return client.post('/equipmentManagerment/equipParameter/detail/basic', params)
}

// 更新设备基础信息
export function fetchUpdateEquipmentBaseInfo(params) {
  return client.post('/equipmentManagerment/equipParameter/updateBasic', params)
}

// 上传文件
export function fetchFileUpload(params) {
  return client.post('/file/file/upload', params, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
}

// 获取文件详情
export function fetchUploadFileRecord(params) {
  return client.post('/equipmentManagerment/equipParameter/updateFiles', params)
}

// 获取文件详情
export function fetchFileDetail(params) {
  return client.get('/file/file/getMappingFile', { params })
}

// 下载附件
export const fetchDownloadFile = (params) => {
  return client.get('/file/file/downloadById', { params })
}
// 删除附件
export const fetchDeleteFile = (params) => {
  return client.get('/file/file/delete', { params })
}

// 获取动态信息板详情
export function requestDynamicInfo(params) {
  return client.get('/equipmentManagerment/equipParameter/detail/boardInfo', { params })
}

// 更新动态信息板详情
export function requestUpdateDynamicInfo(params) {
  return client.post('/equipmentManagerment/equipParameter/updateBoardInfo', params)
}

// 获取所有车间
export function requestAllWorkShop() {
  return client.get('/equipmentManagerment/equipParameter/alldeviceCompany')
}

// 获取所有自定义标签
export function requestAllCustomTag() {
  return client.get('/equipmentManagerment/equipParameter/allCustomTag')
}

// 获取模板详情
export function requestEquipTemplateList(params) {
  // todo change url to basicdata/equipParameterTemplate/detail
  return client.get('/basicdata/equipParameterTemplate/detail', { params })
}

// 获取维护保养详情
export const fetchMaintenanceDetail = (params) => {
  return client.get('/equipmentManagerment/equipParameter/detail/warranty', { params })
}
// 获取租户下的所有用户下拉
export const fetchUserList = (params) => {
  return client.get('/equipmentManagerment/equipParameter/listUser', { params })
}

// 获取维护保养详情
export const fetchUpdateMaintenance = (params) => {
  return client.post('/equipmentManagerment/equipParameter/updateWarrantyInfo', params)
}
// 获取健康管理详情
export const fetchHealthManageDetail = (params) => {
  return client.get('/equipmentManagerment/equipParameter/detail/health', { params })
}
// 修改健康管理详情
export const fetchUpdateHealthManage = (params) => {
  return client.post('/equipmentManagerment/equipParameter/updateHealthInfo', params)
}
// 获取过程记录
export const fetchProcessRecords = (params) => {
  return client.post('/log/log/getOperationLogListPagination', params)
}

// 运行监测配置详情
export function requestOperationalMonitorDetail(params) {
  return client.get('/equipmentManagerment/equipParameter/detailMonitor', { params })
}

// 新建运行监测配置
export function requestSaveOperationalMonitor(params) {
  return client.post('/equipmentManagerment/equipParameter/saveMonitor', params)
}

// 更新运行监测配置
export function requestUpdateOperationalMonitor(params) {
  return client.post('/equipmentManagerment/equipParameter/updateMonitor', params)
}

export function requestRefreshWarnRule(params) {
  return client.get('/equipmentManagerment/equipWarning/warnRefresh', { params })
}

// 报警数据 详情
export function requestEquipWarningList(params) {
  return client.post('/equipmentManagerment/equipWarning/list', params)
}

// 忽略报警数据
export function requestIgnoreEquipWarning(params) {
  return client.post('/equipmentManagerment/equipWarning/ignoreTask', params)
}

// 处理报警数据
export function requestHandleEquipWarning(params) {
  return client.post('/equipmentManagerment/equipWarning/handleTask', params)
}

// 批量处理报警数据
export function requestHandleBatchEquipWarning(params) {
  return client.post('/equipmentManagerment/equipWarning/batchHandleTask', params)
}

// 报警列表
export function requestEquipWarningDetail(params) {
  return client.get('/equipmentManagerment/equipWarning/detail', { params })
}

export function requestDepartmentList(params) {
  return client.get('/equipmentManagerment/equipParameter/listDepartment', { params })
}

// 点巡检
// 设备关联的点巡检模板
export function requestTemplateListByEquipment(params) {
  return client.post('/equipmentManagerment/equipParameter/detail/templateInfoList', params)
}
// 解除关联
export function bindTemplate(params) {
  return client.post('/equipmentManagerment/equipParameter/bindTemplate', params)
}
// 解除关联
export function disassociateTemplate(params) {
  return client.post('/equipmentManagerment/equipParameter/disassociateTemplate', params)
}
