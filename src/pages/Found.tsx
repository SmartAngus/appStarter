import React from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IFoundProps {
  navigation: RootStackNavigation;
}

class Found extends React.Component<IFoundProps> {
  render() {
    return (
      <View>
        <Text>Found</Text>
      </View>
    );
  }
}
export default Found;
