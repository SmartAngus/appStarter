/**
 * 设备管理 > 点巡检计划管理
 */
import { client } from '@/helpers/request'

// 查询tree
export function sparePartsTree(params) {
  return client.post('/equipmentManagerment/spareParts/spareGroup/tree', params)
}

// 新增
export function sparePartsAdd(params) {
  return client.post('/equipmentManagerment/spareParts/spareGroup/save', params)
}

// 修改
export function sparePartsUpdate(params) {
  return client.post('/equipmentManagerment/spareParts/spareGroup/update', params)
}
// 修改
export function sparePartsDel(params) {
  return client.post('/equipmentManagerment/spareParts/spareGroup/delete', params)
}
//备品备件类别
export function sparePartsType(params) {
  return client.post('/equipmentManagerment/spareParts/spareGroup/list', params)
}
//备品备件类别
export function sparePartsNewBuild(params) {
  return client.post('/equipmentManagerment/spareParts/save', params)
}
//新增入库列表
export function sparePartsList(params) {
  return client.post('/equipmentManagerment/spareParts/list', params)
}
//编辑更新
export function sparePartsEditUpdate(params) {
  return client.post('/equipmentManagerment/spareParts/update', params)
}
//列表删除
export function sparePartsListDel(params) {
  return client.post('/equipmentManagerment/spareParts/delete', params)
}
//台账列表
export function sparePartsTzList(params) {
  return client.post('/equipmentManagerment/spareParts/standingBook/list', params)
}
//库存删除
export function sparePartsKzDel(params) {
  return client.post('/equipmentManagerment/spareParts/stock/delete', params)
}
//库存
export function sparePartsKzList(params, isSilent) {
  return client.post('/equipmentManagerment/spareParts/stock/list', params, { isSilent })
}
//台账禁用启用
export function sparePartsKzForbidden(params) {
  return client.post('/equipmentManagerment/spareParts/stock/disable', params)
}
//台账数量调整
export function sparePartsKcNumberChange(params) {
  return client.post('/equipmentManagerment/spareParts/stock/numChange', params)
}
//备品备件库存批量新增
export function sparePartsKcAdd(params) {
  return client.post('/equipmentManagerment/spareParts/stock/save', params)
}
//备品备件库存 位置
export function sparePartsKcPosition(params) {
  return client.get('/equipmentManagerment/spareParts/stock/address', { params })
}
//备品备件库存统计
export function sparePartsKcTotalCount(params) {
  return client.post('/equipmentManagerment/spareParts/standingBook/totalCount', params)
}
//备品备件库存统计
export function sparePartsKcDetail(params) {
  return client.get('/equipmentManagerment/spareParts/stock/detail', { params })
}
//备品备件库存统计
export function sparePartsKcRecords(params) {
  return client.post('/equipmentManagerment/spareParts/stock/records', params)
}
//备品备件库存统计
export function sparePartsKcRecordsStatusOclick(params) {
  return client.post('/equipmentManagerment/hitchTask/checkDeleteHitchTask', params)
}
//备品备件库存导入
export function sparePartsKcImport(params) {
  return client.post('/equipmentManagerment/spareParts/stock/import', params, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

// export const fetchSaveStaff = (data) =>
//   client.post(Api.SAVE_STAFF, data, { headers: { 'Content-Type': 'multipart/form-data' } })

//备品备件库存下载模板
export function sparePartsKcTemplateDownload(params) {
  return client.post('/equipmentManagerment/spareParts/stock/templateDownload', params, { responseType: 'blob' })
}

// client.get('/networkManagerment/register/client/downloadGatewayTemplate', { params, responseType: 'blob' })
