/**
 * @type model
 * @file 设备管理 -> 动态监控
 */
import {Effect, Model, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import storage, {load} from '@/utils/storage';
import axios from 'axios';
import {requestCheckStatistics} from '@/apis/equipmentManagement/dynamicMonitor';

interface IDynamicMonitor {
  id: string;
  name: string;
  classify?: string;
}

interface DynamicMonitorState {
  myCategories: IDynamicMonitor[];
  categories: IDynamicMonitor[];
}

interface DynamicMonitorModel extends Model {
  namespace: 'dynamicMonitor';
  state: DynamicMonitorState;
  effects: {
    loadData: Effect;
    getInspection: Effect;
  };
  reducers: {
    steState: Reducer<DynamicMonitorState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  myCategories: [
    {id: 'home', name: '推荐'},
    {id: 'vip', name: 'Vip'},
    {id: 'home', name: '推荐'},
  ],
  categories: [],
};

const CATEGORY_URL = '';

const dynamicMonitorModel: DynamicMonitorModel = {
  namespace: 'dynamicMonitor',
  state: initialState,
  effects: {
    *loadData(_, {call, put}) {
      console.log('.....loaddata');
      // 从storage获取数据
      const myCategories = yield call(load, {key: ''});
      const categories = yield call(load, {key: 'categories'});
      // 发起action，将数据保存到state
      if (myCategories) {
        yield put({
          type: 'setState',
          payload: {
            myCategories,
          },
        });
      } else {
        yield put({
          type: 'setState',
          payload: {
            categories,
          },
        });
      }
    },
    *getInspection({payload}, {call, put}) {
      try {
        console.log(payload);
        const myCategories = yield call(requestCheckStatistics, payload);
        console.log('>>>>getInspection', myCategories);
      } catch (e) {
        console.log(e);
      }
    },
  },
  reducers: {
    steState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    // setup({dispatch}) {
    //   dispatch({type: 'loadData'});
    // },
    // asyncStorage() {
    //   storage.sync.categories = async () => {
    //     const data = await axios.get(CATEGORY_URL);
    //     return data;
    //   };
    // },
  },
};

export default dynamicMonitorModel;
