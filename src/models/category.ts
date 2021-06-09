import {Effect, Model, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import storage, {load} from '@/utils/storage';
import axios from 'axios';

interface ICategory {
  id: string;
  name: string;
  classify?: string;
}

interface CategoryModelState {
  myCategories: ICategory[];
  categories: ICategory[];
}

interface CategoryModal extends Model {
  namespace: 'category';
  state: CategoryModelState;
  effects: {
    loadData: Effect;
  };
  reducers: {
    steState: Reducer<CategoryModelState>;
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

const categoryModel: CategoryModal = {
  namespace: 'category',
  state: initialState,
  effects: {
    *loadData(_, {call, put}) {
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
    setup({dispatch}) {
      dispatch({type: 'loadData'});
    },
    asyncStorage() {
      storage.sync.categories = async () => {
        const data = await axios.get(CATEGORY_URL);
        return data;
      };
    },
  },
};

export default categoryModel;
