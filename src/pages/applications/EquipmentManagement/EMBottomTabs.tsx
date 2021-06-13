import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DynamicMonitor from '@/pages/applications/EquipmentManagement/DynamicMonitor';
import EquipmentHandover from '@/pages/applications/EquipmentManagement/EquipmentHandover';
import InspectionEvaluation from '@/pages/applications/EquipmentManagement/InspectionEvaluation';
import LubricationManagement from '@/pages/applications/EquipmentManagement/LubricationManagement';
import MaintenanceTask from '@/pages/applications/EquipmentManagement/MaintenanceTask';

import {RootStackNavigation} from '@/navigator/index';
import IconFont from '@/icons';

export type EMBottomTabsParamList = {
  DynamicMonitor: undefined;
  EquipmentHandover: undefined;
  InspectionEvaluation: undefined;
  LubricationManagement: undefined;
  MaintenanceTask: undefined;
};

interface IEMBottomTabsProps {
  navigation: RootStackNavigation;
  route: any;
}

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'DynamicMonitor';
  switch (routeName) {
    case 'DynamicMonitor':
      return '动态监控';
    case 'EquipmentHandover':
      return '交接班';
    case 'InspectionEvaluation':
      return '点巡检';
    case 'LubricationManagement':
      return '润滑';
    case 'MaintenanceTask':
      return '故障维修';
    default:
      return '首页';
  }
}

const Tab = createBottomTabNavigator();
class EMBottomTabs extends React.Component<IEMBottomTabsProps> {
  componentDidMount() {
    this.setHeaderTitle();
  }
  componentDidUpdate(
    prevProps: Readonly<IEMBottomTabsProps>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    this.setHeaderTitle();
  }
  setHeaderTitle() {
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTabs';
    console.log('>>>EMBottomTabs+++routeName+++', routeName);
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
          name="DynamicMonitor"
          component={DynamicMonitor}
          options={{
            tabBarLabel: '动态监控',
            tabBarIcon: ({color, size}) => (
              <IconFont color={color} size={size} name="iconbaocun" />
            ),
          }}
        />
        <Tab.Screen
          name="InspectionEvaluation"
          component={InspectionEvaluation}
          options={{
            tabBarLabel: '点巡检',
            tabBarIcon: ({color, size}) => (
              <IconFont color={color} size={size} name="iconanzuzhixuanze" />
            ),
          }}
        />
        <Tab.Screen
          name="MaintenanceTask"
          component={MaintenanceTask}
          options={{
            tabBarLabel: '故障维修',
            tabBarIcon: ({color, size}) => (
              <IconFont color={color} size={size} name="iconbaojingcishu" />
            ),
          }}
        />
        <Tab.Screen
          name="LubricationManagement"
          component={LubricationManagement}
          options={{
            tabBarLabel: '润滑',
            tabBarIcon: ({color, size}) => (
              <IconFont
                color={color}
                size={size}
                name="iconbaojingchulishuai"
              />
            ),
          }}
        />
        <Tab.Screen
          name="EquipmentHandover"
          component={EquipmentHandover}
          options={{
            tabBarLabel: '交接班',
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
export default EMBottomTabs;
