import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from '@/utils/dva';
import Navigator from '@/navigator';
import {StatusBar} from 'react-native';
import {Provider} from '@ant-design/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <Provider>
            <Navigator />
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
              translucent
            />
          </Provider>
        </ReduxProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
