/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from '@/app';
import {name as appName} from './app.json';
/***
 * 生产环境覆盖log打印
 */
if (!__DEV__) {
  const emptyFunc = () => {};
  global.console.info = emptyFunc;
  global.console.log = emptyFunc;
  global.console.warn = emptyFunc;
  global.console.error = emptyFunc;
}

AppRegistry.registerComponent(appName, () => App);
