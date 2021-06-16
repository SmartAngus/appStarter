import home from './home';
import account from './account';
import dynamicMonitorModel from '@/models/equipmentManagement/dynamicMonitor';
import {DvaLoadingState} from 'dva-loading-ts';

const models = [home, account, dynamicMonitorModel];

export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState;
  account: typeof account.state;
  dynamicMonitor: typeof dynamicMonitorModel.state; // 设备管理->动态监控
};

export default models;
