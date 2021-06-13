import {Effect, Model, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import {CHANNEL_URL, GUESS_URL} from '@/apis';
import axios from 'axios';

interface HomeState {
  num: number;
  guesses: IGuess[];
  channels: IChannel[];
  activeSlideIndex: number; // 保存轮播图当前的index
}
// 猜你喜欢
export interface IGuess {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
}
// 多听的频道
export interface IChannel {
  id: string;
  title: string;
  image: string;
  remark: string;
  played: number;
  playing: number;
}

interface HomeModel extends Model {
  namespace: string;
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
    setState: Reducer<HomeState>;
  };
  effects?: {
    addAsync: Effect;
    fetchGuess: Effect;
    fetchChannels: Effect;
  };
  subscriptions?: SubscriptionsMapObject;
}

function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const initialState = {
  num: 0,
  guesses: [],
  channels: [],
  activeSlideIndex: 1,
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(state = initialState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *addAsync({payload}, {call, put}) {
      yield call(delay, 3000);
      yield put({
        type: 'add',
        payload,
      });
    },
    *fetchGuess(_, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      yield put({
        type: 'setState',
        payload: {
          guesses: data.data,
        },
      });
    },
    *fetchChannels(_, {call, put}) {
      const {data} = yield call(axios.get, CHANNEL_URL);
      yield put({
        type: 'setState',
        payload: {
          channels: data.data.list,
        },
      });
    },
  },
};
export default homeModel;
