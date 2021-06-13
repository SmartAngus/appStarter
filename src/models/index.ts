import home from './home';
import userInfo from './userInfo';
import {DvaLoadingState} from 'dva-loading-ts';

const models = [home, userInfo];

export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState;
  userInfo: typeof userInfo.state;
};

export default models;
