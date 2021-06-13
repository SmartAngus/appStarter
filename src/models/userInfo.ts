import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import Toast from 'react-native-root-toast';
import {goBack} from '@/utils/index';
import storage, {load} from '@/utils/storage';
import {login} from '@/apis';

export interface IUser {
  username: string;
  password: string;
  avatar?: string;
}

export interface UserModelState {
  user?: IUser;
}

export interface UserModel extends Model {
  namespace: 'userInfo';
  state: UserModelState;
  effects: {
    login: Effect;
    logout: Effect;
    loadStorage: Effect;
  };
  reducers: {
    setState: Reducer<UserModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initalState = {
  user: {
    username: '',
    password: '',
  },
};

const userModel: UserModel = {
  namespace: 'userInfo',
  state: initalState,
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *login({payload}, {call, put}) {
      console.log('>>>>payload', payload);
      try {
        const res = yield call(login, payload);
        const {data, code, msg} = res.data;
        console.log(data, code, msg);
        if (code === 200) {
          yield put({
            type: 'setState',
            payload: {
              user: data,
            },
          });
          storage.save({
            key: 'user',
            data,
          });
          goBack();
        } else {
          Toast.show(msg, {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
          });
          console.log(msg);
        }
      } catch (e) {
        console.log(e);
      }
    },
    *logout(_, {put}) {
      yield put({
        type: 'setState',
        payload: {
          user: undefined,
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
        console.log('>>>user', user);
        yield put({
          type: 'setState',
          payload: {
            user,
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
