/**
 * @file 润滑计划
 */
import { client } from '@/helpers/request'

// 模拟 enum
const Api = {
  PLAN_LIST: '/equipmentManagerment/lubricate/list', //润滑计划列表
  MANAGEMENT_LIST: '/equipmentManagerment/lubricate/management/list', // 润滑管理列表
  EQUIP_INFO_LIST: '/equipmentManagerment/lubricate/equip/list', // 设备信息列表
  INSTALLATION_LIST: '/equipmentManagerment/lubricate/installation/list', // 装置信息列表
  NAME_LIST: '/equipmentManagerment/lubricate/nameList', // 润滑部位列表
  SAVE_EQUIP: '/equipmentManagerment/lubricate/equip/save', // 保存设备信息
  UPDATE_EQUIP: '/equipmentManagerment/lubricate/equip/update', // 更新设备信息
  DELETE_EQUIP: '/equipmentManagerment/lubricate/equip/delete', // 删除设备信息
  SAVE_INSTALLATION: '/equipmentManagerment/lubricate/installation/save', // 保存装置名称
  UPDATE_INSTALLATION: '/equipmentManagerment/lubricate/installation/update', // 更新装置名称
  DELETE_INSTALLATION: '/equipmentManagerment/lubricate/installation/delete', // 删除装置名称
  SAVE_LUBRICATE: '/equipmentManagerment/lubricate/save', // 保存润滑部位
  UPDATE_LUBRICATE: '/equipmentManagerment/lubricate/update', // 更新润滑部位
  DELETE_LUBRICATE: '/equipmentManagerment/lubricate/delete', // 删除润滑部位
  SAVE_MANAGEMENT: '/equipmentManagerment/lubricate/management/save', // 新增润滑管理
  LUBRICATE_INFO: '/equipmentManagerment/lubricate/management/lastLubricate', // 润滑管理 头部 润滑信息
}

export const fetchPlanList = (data, isSilent) => client.post(Api.PLAN_LIST, data, { isSilent })

export const fetchManagementList = (data, isSilent) => client.post(Api.MANAGEMENT_LIST, data, { isSilent })

export const fetchEquipInfoList = (data, isSilent) => client.post(Api.EQUIP_INFO_LIST, data, { isSilent })

export const fetchInstallationList = (data, isSilent) => client.post(Api.INSTALLATION_LIST, data, { isSilent })

export const fetchNameList = (data, isSilent) => client.post(Api.NAME_LIST, data, { isSilent })

export const fetchSaveEquip = (data) => client.post(Api.SAVE_EQUIP, data)

export const fetchUpdateEquip = (data) => client.post(Api.UPDATE_EQUIP, data)

export const fetchDeleteEquip = (data) => client.post(Api.DELETE_EQUIP, data)

export const fetchSaveInstallation = (data) => client.post(Api.SAVE_INSTALLATION, data)

export const fetchUpdateInstallation = (data) => client.post(Api.UPDATE_INSTALLATION, data)

export const fetchDeleteInstallation = (data) => client.post(Api.DELETE_INSTALLATION, data)

export const fetchSaveLubricate = (data) => client.post(Api.SAVE_LUBRICATE, data)

export const fetchUpdateLubricate = (data) => client.post(Api.UPDATE_LUBRICATE, data)

export const fetchDeleteLubricate = (data) => client.post(Api.DELETE_LUBRICATE, data)

export const fetchSaveLubricateManagement = (data, isSilent) =>
  client.post(Api.SAVE_MANAGEMENT, data, { headers: { 'Content-Type': 'multipart/form-data' }, isSilent })

export const fetchLubricateInfo = (params, isSilent) => client.get(Api.LUBRICATE_INFO, { params, isSilent })
