import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import Detail from '@/pages/Detail';
import BottomTabs from '@/navigator/BottomTabs';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Detail: undefined;
};
let Stack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

class Navigator extends React.Component<any, any> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerTitleAlign: 'center'}}
          headerMode="float">
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              headerTitle: '首页',
              headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            }}
          />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigator;
