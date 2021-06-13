import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {Header} from 'react-native-elements';
import Touchable from '@/components/Touchable';
import IconFont from '@/icons';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import EMBottomTabs from '@/pages/applications/EquipmentManagement/EMBottomTabs';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const HomeHeaderLeft = ({navigation, p}: any) => {
  const openDrawer = () => {
    console.log('打开用户信息');
    navigation.replace('Home');
  };
  useEffect(() => {
    const {navigation: navigation2} = p;
    console.log('==p==', navigation2);
  });
  return (
    <Touchable onPress={openDrawer}>
      <IconFont name="iconbianjifankui" color="#fff" size={18} />
    </Touchable>
  );
};

const HomeHeaderCenter = ({routeName}: any) => {
  return (
    <View>
      <Text>{routeName}</Text>
    </View>
  );
};

const mapStateForProps = ({userInfo}: RootState) => ({
  userInfo: userInfo.user,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IEquipmentManagementProps extends ModelState {
  navigation: RootStackNavigation;
  route: any;
}

export type EquipmentManagementStackParamList = {
  EquipmentManagementw: {
    screen?: string;
  };
};
let EquipmentManagementStack =
  createStackNavigator<EquipmentManagementStackParamList>();

export type RootStackNavigation =
  StackNavigationProp<EquipmentManagementStackParamList>;

class EquipmentManagement extends React.Component<IEquipmentManagementProps> {
  render() {
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTabs';
    return (
      <EquipmentManagementStack.Navigator
        headerMode="screen"
        initialRouteName="EquipmentManagement">
        <EquipmentManagementStack.Screen
          name="EquipmentManagementw"
          options={{
            header: p => (
              <View>
                <Header
                  statusBarProps={{barStyle: 'light-content'}}
                  barStyle="light-content" // or directly
                  containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                  }}>
                  <HomeHeaderLeft navigation={navigation} p={p} />
                  <HomeHeaderCenter
                    navigation={navigation}
                    routeName={routeName}
                    p={p}
                  />
                  <HomeHeaderLeft navigation={navigation} p={p} />
                </Header>
              </View>
            ),
          }}
          component={EMBottomTabs}
        />
      </EquipmentManagementStack.Navigator>
    );
  }
}
export default connector(EquipmentManagement);
