/**
 * @file 设备管理 > 计量管理 apis
 */
import { client } from '@/helpers/request'

// 模拟 enum
const Api = {
  MANAGEMENT_LIST: '/equipmentManagerment/appearanceMeasures/management/list', // 计量管理列表
  STATUS_LIST: '/equipmentManagerment/appearanceMeasures/management/statusList', // 仪表状态列表
  SAVE_METERS: '/equipmentManagerment/appearanceMeasures/management/save', // 保存仪表
  DELETE_METERS: '/equipmentManagerment/appearanceMeasures/management/delete', // 删除仪表
  DETECT: '/equipmentManagerment/appearanceMeasures/management/detect', // 检定
  ACTUAL_DETECT: '/equipmentManagerment/appearanceMeasures/management/actualDetect', // 实际检定
  UPDATE_STATUS: '/equipmentManagerment/appearanceMeasures/management/updateStatus', // 状态变更
  TOTAL_COUNT: '/equipmentManagerment/appearanceMeasures/management/totalCount', // 计量管理统计
  IMPORT_EXCEL: '/equipmentManagerment/appearanceMeasures/management/import', // 导入报表
  EXPORT_TEMPLATE: '/equipmentManagerment/appearanceMeasures/management/downloadTemplate', // 下载导入模板
  EXPORT_LIST: '/equipmentManagerment/appearanceMeasures/management/export', // 导出计量管理
  GET_WARN: '/equipmentManagerment/appearanceMeasures/management/getWarning', // 获取检定提醒
  WARN_CHECK: '/equipmentManagerment/appearanceMeasures/management/warning', // 保存检定提醒
  LEDGER_LIST: '/equipmentManagerment/appearanceMeasures/standingBook/list', // 台账列表
  LEDGER_EXPORT: '/equipmentManagerment/appearanceMeasures/standingBook/export', // 台账导出
}

export const fetchManagementList = (data) => client.post(Api.MANAGEMENT_LIST, data)

export const fetchLedgerList = (data, isSilent) => client.post(Api.LEDGER_LIST, data, { isSilent })

export const fetchStatusList = (data) => client.post(Api.STATUS_LIST, data)

export const fetchSaveMeters = (data) => client.post(Api.SAVE_METERS, data)

export const fetchDeleteMeters = (data) => client.post(Api.DELETE_METERS, data)

export const fetchDetect = (data) => client.post(Api.DETECT, data)

export const fetchActualDetect = (data) => client.post(Api.ACTUAL_DETECT, data)

export const fetchUpdateStatus = (data) => client.post(Api.UPDATE_STATUS, data)

export const fetchTotalCount = (data) => client.post(Api.TOTAL_COUNT, data)

export const fetchWarn = (data) => client.post(Api.GET_WARN, data)

export const fetchWarnCheck = (data) => client.post(Api.WARN_CHECK, data)

export const fetchImportExcel = (data) =>
  client.post(Api.IMPORT_EXCEL, data, { headers: { 'Content-Type': 'multipart/form-data' } })

export const fetchExportTemplate = (data) => client.post(Api.EXPORT_TEMPLATE, data, { responseType: 'blob' })

export const fetchExportList = (data) => client.post(Api.EXPORT_LIST, data, { responseType: 'blob' })

export const fetchLedgerExport = (data) => client.post(Api.LEDGER_EXPORT, data, { responseType: 'blob' })
