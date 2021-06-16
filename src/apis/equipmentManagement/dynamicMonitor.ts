/**
 * 设备管理 > 动态监控ali
 */
import client from '@/utils/http';

// 故障情况统计
export function requestFailureStatistics(params: any) {
  return client.post('/equipmentManagerment/hitchTask/getFaultCount', params);
}
// 点检情况统计
export function requestCheckStatistics(params: any) {
  return client.post(
    '/equipmentManagerment/equipCheckup/task/getInspection',
    params,
  );
}
// 润滑情况统计
export function requestLubricationStatistics(params: any) {
  return client.post(
    '/equipmentManagerment/lubricate/management/total',
    params,
  );
}
// 备品备件消耗
export function requestSparePartsConsum(params: any) {
  return client.post(
    '/equipmentManagerment/spareParts/standingBook/totalCount',
    params,
  );
}
// 报警趋势
export function requestAlarmPrend(params: any) {
  return client.post(
    '/equipmentManagerment/equipParameter/getWarningCard',
    params,
  );
}

// 查询设备的关联数据点
export function requestAssociateDataPointList(params: any) {
  return client.get(
    '/equipmentManagerment/equipParameter/equipRelateDataPointList',
    {params},
  );
}

// 设备首页设备卡片数据点展示配置
export function requestConfigShowAssociateDataPoint(params: any) {
  return client.post(
    '/equipmentManagerment/equipParameter/configShowDataPointByCard',
    params,
  );
}

// 设备首页设备作业率卡片
export function requestDeviceWorkRatio(params: any) {
  return client.post(
    '/equipmentManagerment/equipParameter/getDeviceWorkCard',
    params,
  );
}

// 设备首页数据点畅通度卡片
export function requestDataPointPatency(params) {
  return client.post(
    '/equipmentManagerment/equipParameter/getDataPointPatencyCard',
    params,
  );
}

// 设备首页平均健康值卡片
export function requestAverageHealth(params) {
  return client.post(
    '/equipmentManagerment/equipParameter/getAverageHealthCard',
    params,
  );
}

// 设备首页报警卡片
export function requestWaringRatio(params) {
  return client.post(
    '/equipmentManagerment/equipParameter/getWarningCard',
    params,
  );
}

// 设备首页列表查询
export function requestDeviceList(params) {
  return client.post(
    '/equipmentManagerment/equipParameter/homePageDeviceList',
    params,
  );
}

// 设备首页列表查询
export function requestDeviceNum(params) {
  return client.post(
    '/equipmentManagerment/equipParameter/getDeviceNum',
    params,
  );
}
