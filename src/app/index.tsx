import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from '@/utils/dva';
import Navigator from '@/navigator';
import {StatusBar} from 'react-native';
import {Provider} from '@ant-design/react-native';
// import '@/utils/http';

class App extends React.PureComponent {
  render() {
    return (
      <ReduxProvider store={store}>
        <Provider>
          <Navigator />
          <StatusBar backgroundColor="transparent" />
        </Provider>
      </ReduxProvider>
    );
  }
}

export default App;
