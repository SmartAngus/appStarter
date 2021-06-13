import axios from 'axios';
import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import Toast from 'react-native-root-toast';
import {Reducer} from 'redux';
import storage, {load} from '@/utils/storage';
import {navigate} from '../utils';

const REQUEST_URL = '/mock/11/bear/login';

export interface IUser {
  name: string;
  avatar: string;
}

export interface LoginModelState {
  loging: boolean;
  user?: IUser;
}

export interface LoginModelType extends Model {
  namespace: 'login';
  state: LoginModelState;
  effects: {
    login: Effect;
    logout: Effect;
    loadStorage: Effect;
  };
  reducers: {
    setState: Reducer<LoginModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  loging: false,
  user: undefined,
};

/**
 * 登录模块的model
 */
const loginModel: LoginModelType = {
  namespace: 'login',
  state: initialState,
  reducers: {
    setState(state, {payload}) {
      const newState = {
        ...state,
        ...payload,
      };

      return newState;
    },
  },
  effects: {
    *loadStorage(_, {call, put}) {
      const user = yield call(load, {key: 'user'});
      console.log('>>>>loadStorage', user);
      yield put({
        type: 'setState',
        payload: {
          loging: true,
          user: user,
        },
      });
    },
    *login({payload, callback}, {call, put}) {
      console.log('>>>login>>>');
      const {data, status, msg} = yield call(axios.post, REQUEST_URL, payload);
      if (status === 100) {
        yield put({
          type: 'setState',
          payload: {
            loging: true,
            user: data,
          },
        });
        storage.save({
          key: 'user', // 注意:请不要在key中使用_下划线符号!
          data: data,
        });
        if (callback) {
          callback();
        }
      } else {
        Toast.show(msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
        });
      }
    },
    *logout(_, {put}) {
      yield put({
        type: 'setState',
        payload: {
          loging: false,
          user: undefined,
        },
      });
      storage.save({
        key: 'user', // 注意:请不要在key中使用_下划线符号!
        data: null,
      });
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({type: 'userInfo/loadStorage'});
    },
  },
};

export default loginModel;
