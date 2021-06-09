import {Effect, Model, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import {load} from '@/utils/storage';

interface UserInfo {
  id: string | undefined;
  name: string | undefined;
  roles: string | undefined;
  token: string | undefined;
  age: number | undefined;
}

interface UserInfoState {
  account: UserInfo;
}

interface UserInfoModel extends Model {
  namespace: 'userInfo';
  state: UserInfoState;
  effects: {
    loadUserInfo: Effect;
  };
  reducers: {
    setState: Reducer<UserInfoState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  account: {
    id: undefined,
    name: undefined,
    roles: undefined,
    token: undefined,
    age: undefined,
  },
};

const userInfoModel: UserInfoModel = {
  namespace: 'userInfo',
  state: initialState,
  effects: {
    *loadUserInfo(_, {put, call}) {
      // 从localstorage获取用户信息
      const user = yield call(load, {key: 'user'});
      yield put({
        type: 'setState',
        payload: {
          user,
        },
      });
    },
  },
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {},
};

export default userInfoModel;
