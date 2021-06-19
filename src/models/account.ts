import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import Toast from 'react-native-root-toast';
import {goBack, navigate} from '@/utils/index';
import storage, {load} from '@/utils/storage';
import {
  fetchLogin,
  fetchAccountInfo,
  fetchUpdatePassword,
} from '@/apis/account';

export interface IUser {
  account: string;
  password: string;
  avatar?: string;
  loginType?: number;
  token: string;
  [key: string]: any;
}

export interface UserModelState {
  user: IUser;
}

export interface UserModel extends Model {
  namespace: 'account';
  state: UserModelState;
  effects: {
    login: Effect;
    logout: Effect;
    loadStorage: Effect;
    fetchUserInfo: Effect;
    fetchUpdatePassword: Effect;
  };
  reducers: {
    setState: Reducer<UserModelState>;
    reset: Reducer<UserModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initalState: any = {
  user: {
    loginType: undefined,
    account: '',
    password: '',
  },
};

const userModel: UserModel = {
  namespace: 'account',
  state: initalState,
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
    reset() {
      return {
        ...initalState,
      };
    },
  },
  effects: {
    *login({payload}, {call, put}) {
      try {
        const {account} = payload;
        const res = yield call(fetchLogin, payload);
        yield put({
          type: 'setState',
          payload: {
            user: {
              ...payload,
              token: res,
            },
          },
        });
        console.log('>>>登录成功');
        console.log('>>>>正在获取用户信息....');
        const userInfo = yield call(fetchAccountInfo, {menuType: 3, account});
        yield put({
          type: 'setState',
          payload: {
            user: {
              ...userInfo,
              token: res,
            },
          },
        });
        storage.save({
          key: 'user',
          data: {
            user: {
              ...userInfo,
              token: res,
            },
          },
        });
        // goBack();
      } catch (e) {
        console.log(e);
      }
    },
    *fetchUserInfo({payload}, {call, put}) {
      const res = yield call(fetchAccountInfo, payload);
      console.log(res);
    },
    *fetchUpdatePassword({payload}, {call, put}) {
      try {
        console.log('fetchUpdatePassword>>>', payload);
        const res = yield call(fetchUpdatePassword, payload);
        console.log('fetchUpdatePassword>>>', res);
      } catch (e) {
        console.log('---->', e);
      }
    },
    *logout(_, {put}) {
      yield put({
        type: 'setState',
        payload: {
          user: {},
        },
      });
      storage.save({
        key: 'user',
        data: null,
      });
    },
    *loadStorage(_, {put, call}) {
      try {
        const user = yield call(load, {key: 'user'});
        console.log('>>>>loadStorage>>>', user);
        yield put({
          type: 'setState',
          payload: {
            ...user,
          },
        });
      } catch (error) {
        console.log('保存用户信息错误', error);
      }
    },
  },
  subscriptions: {
    setup({dispatch}) {
      console.log('>>>>>subscriptions');
      dispatch({
        type: 'loadStorage',
      });
    },
  },
};

export default userModel;
