import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listener from '@/pages/Listener';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation} from '@/navigator/index';
import IconFont from '@/icons';
import HomeTabs from '@/navigator/HomeTabs';

export type BottomTabsParamList = {
  HomeTabs: undefined;
  Listener: undefined;
  Found: undefined;
  Account: undefined;
};

interface IBottomTabsProps {
  navigation: RootStackNavigation;
  route: any;
}

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTabs';
  console.log('routeName1===', routeName);
  switch (routeName) {
    case 'HomeTabs':
      return '首页';
    case 'Listener':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '首页';
  }
}

const Tab = createBottomTabNavigator();
class BottomTabs extends React.Component<IBottomTabsProps> {
  componentDidMount() {
    this.setHeaderTitle();
  }
  componentDidUpdate(
    prevProps: Readonly<IBottomTabsProps>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    this.setHeaderTitle();
  }
  setHeaderTitle() {
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTabs';
    if (routeName == 'HomeTabs') {
      navigation.setOptions({
        headerTitle: '',
        headerTransparent: true,
      });
    } else {
      navigation.setOptions({
        headerTitle: getHeaderTitle(route),
        headerTransparent: true,
      });
    }
  }

  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont color={color} size={size} name="iconbaocun" />
            ),
          }}
        />
        <Tab.Screen
          name="Listener"
          component={Listener}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <IconFont color={color} size={size} name="iconanzuzhixuanze" />
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont color={color} size={size} name="iconbaojingcishu" />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IconFont
                color={color}
                size={size}
                name="iconbaojingchulishuai"
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default BottomTabs;
