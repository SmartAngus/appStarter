import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IListenerProps {
  navigation: RootStackNavigation;
}

class Listener extends React.Component<IListenerProps> {
  handlePress() {
    console.log('---', this.props);
    this.props.navigation.navigate('Detail');
  }
  render() {
    return (
      <View>
        <Text>Listener</Text>
        <Button
            title="跳转到详情页面"
            onPress={this.handlePress.bind(this)}
        />
      </View>
    );
  }
}
export default Listener;
