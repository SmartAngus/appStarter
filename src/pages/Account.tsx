import React from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator';
import Login from '@/pages/Login';

interface IAccountProps {
  navigation: RootStackNavigation;
}

class Account extends React.Component<IAccountProps> {
  render() {
    return (
      <View>
        <Text>Account</Text>
        <Login />
      </View>
    );
  }
}

export default Account;
