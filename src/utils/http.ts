import axios from 'axios';
import Config from 'react-native-config';
import {Toast} from '@ant-design/react-native';
import Loading from '@/components/Loading';
import {baseURL} from '@/config';
import store from '@/utils/dva';

// axios.defaults.baseURL = baseURL;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 添加请求拦截器
const loading = new Loading();

const instance = axios.create({baseURL, timeout: 450000});

instance.interceptors.request.use(
  config => {
    console.log('baseURL>>>', baseURL);
    const {quiet = false} = config;
    if (!quiet) {
      loading.start();
    }
    const {account} = store.getState();
    console.log('>>>>account user>>>', account);
    const {token} = account.user;
    const headers = {
      ...config.headers,
      token,
    };
    console.log('>>>>instance.interceptors.request', token);
    return {...config, headers};
  },
  error => {
    loading.stop();
    const {status} = error;
    const message = codeMessage[status];
    if (status in codeMessage) {
      Toast.info(message, 1);
    }
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    loading.stop();
    const {data: res} = response;
    const {code, data, msg} = res;
    // console.log(code, res);

    switch (code) {
      case 1000:
        return data;
      // other businesss code process logic here,
      // for example, in a project, code `4507` means token is not valid,
      // there would be a jump logic to deal with.
      case 2002:
        // token is out of date or not valid
        store.dispatch({type: 'account/reset'});
        return Promise.reject(data);
      default:
        Toast.info(msg, 1.5);
        return Promise.reject(data);
    }
  },
  error => {
    loading.stop();
    Toast.info('服务器响应失败!', 1);
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
