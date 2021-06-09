import React from 'react';
import {Provider} from 'react-redux';
import store from '@/utils/dva';
import Navigator from '@/navigator';
import {StatusBar} from 'react-native';
export default class extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        <StatusBar backgroundColor="transparent" />
      </Provider>
    );
  }
}
