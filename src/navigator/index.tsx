import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import Detail from '@/pages/Detail';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import Login from '@/pages/Login';
import Home from '@/pages/Home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserDrawer from '@/pages/Home/UserDrawer';
import EquipmentManagement from '@/pages/applications/EquipmentManagement';
import SplashScreen from 'react-native-splash-screen';
export type RootStackParamList = {
  EquipmentManagement: {
    screen?: string;
  };
  Home: undefined;
  Detail: undefined;
};
let RootStack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const mapStateForProps = ({home, userInfo}: RootState) => ({
  num: home.num,
  username: userInfo.user?.username,
});

const connector = connect(mapStateForProps);

type ModelState = ConnectedProps<typeof connector>;

// 声明全频的导航页面有哪些
export type ModalStackParamList = {
  Root: undefined;
  Detail: undefined;
  EquipmentManagement: undefined;
};

const ModalStack = createStackNavigator<ModalStackParamList>();

export type ModalSTackNavigation = StackNavigationProp<ModalStackParamList>;

export type DrawerStackParamList = {
  UserInfo: undefined;
  RootHome: undefined;
};

const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

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
      screenOptions={{
        headerTitleAlign: 'center',
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerBackTitleVisible: false,
        headerTintColor: '#333',
      }}>
      <ModalStack.Screen
        name="Root"
        component={Index}
        options={{headerShown: false}}
      />
      <ModalStack.Screen name="Detail" component={Detail} />
    </ModalStack.Navigator>
  );
};

// 根导航
const Index = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      headerMode="float">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '首页',
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
        }}
      />
      <RootStack.Screen
        name="EquipmentManagement"
        component={EquipmentManagement}
        options={{
          headerTitle: '设备管理',
          headerShown: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
        }}
      />
    </RootStack.Navigator>
  );
};

class Navigator extends React.Component<ModelState> {
  componentDidMount() {
    const {num, username} = this.props;
    console.log('navigation===', num, username);
    SplashScreen.hide();
  }

  render() {
    const {username} = this.props;
    return (
      <NavigationContainer>
        {username ? <DrawerStackScreen /> : <Login />}
      </NavigationContainer>
    );
  }
}
export default connector(Navigator);
