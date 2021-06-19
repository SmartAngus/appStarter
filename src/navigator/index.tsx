import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import Detail from '@/pages/Detail';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import Login from '@/pages/Login';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserDrawer from '@/pages/Home/UserDrawer';
import SplashScreen from 'react-native-splash-screen';
import {stackRoutes, modalStackRoutes} from '@/navigator/routes';
import {navigationRef} from '@/utils';
export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
  DynamicMonitor: any;
  InspectionEvaluation: undefined;
  MaintenanceTask: undefined;
  LubricationManagement: undefined;
  EquipmentHandover: undefined;
  [key: string]: undefined;
};

let RootStack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const mapStateForProps = ({home, account}: RootState) => ({
  num: home.num,
  user: account.user,
});

const connector = connect(mapStateForProps);

type ModelState = ConnectedProps<typeof connector>;

// 声明全频的导航页面有哪些
export type ModalStackParamList = {
  Root: undefined;
  Detail: undefined;
  [key: string]: undefined;
};

const ModalStack = createStackNavigator<ModalStackParamList>();

export type ModalSTackNavigation = StackNavigationProp<ModalStackParamList>;

export type DrawerStackParamList = {
  UserInfo: undefined;
  RootHome: undefined;
  [key: string]: undefined;
};

const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

const rootScreenOptions: any = {
  headerStyle: {
    backgroundColor: '#096dd9',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
};

const modalScreenOptions: any = {
  headerTitleAlign: 'center',
  gestureEnabled: true,
  ...TransitionPresets.ModalSlideFromBottomIOS,
  headerBackTitleVisible: true,
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#096dd9',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
};

// 抽屉导航
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator drawerContent={props => <UserDrawer {...props} />}>
      <DrawerStack.Screen name="RootHome" component={ModalStackScreen} />
      <DrawerStack.Screen name="UserInfo" component={Detail} />
    </DrawerStack.Navigator>
  );
};

// 全屏导航
const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={modalScreenOptions}>
      <ModalStack.Screen
        name="Root"
        component={Index}
        options={{headerShown: false}}
      />
      {modalStackRoutes.map(route => {
        const {title, name, component, headerLeft, headerRight} = route;
        const stackOptions = {title, headerLeft, headerRight};
        const stackProps = {key: name, name, component, options: stackOptions};
        return <ModalStack.Screen {...stackProps} />;
      })}
    </ModalStack.Navigator>
  );
};

// 根导航
const Index = () => {
  return (
    <RootStack.Navigator screenOptions={rootScreenOptions} headerMode="float">
      {stackRoutes.map(route => {
        const {title, name, component, headerLeft, headerRight} = route;
        const stackOptions = {title, headerLeft, headerRight};
        const stackProps = {key: name, name, component, options: stackOptions};
        return <RootStack.Screen {...stackProps} />;
      })}
    </RootStack.Navigator>
  );
};

/**
 * 应用根组件
 */
class Navigator extends React.Component<ModelState> {
  componentDidMount() {
    // 隐藏启动动画
    SplashScreen.hide();
  }

  render() {
    const {user} = this.props;
    const {token} = user;
    return (
      <NavigationContainer ref={navigationRef}>
        {token ? <DrawerStackScreen /> : <Login />}
      </NavigationContainer>
    );
  }
}
export default connector(Navigator);
