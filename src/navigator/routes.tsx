import React from 'react';
import IconFont from '@/icons';
import {Text, View} from 'react-native';
import Touchable from '@/components/Touchable';
import {goBack, navigate} from '@/utils';
import {Button, withBadge, Badge} from 'react-native-elements';
import Home from '@/pages/Home';
import DynamicMonitor from '@/pages/applications/EquipmentManagement/DynamicMonitor';
import MaintenanceTask from '@/pages/applications/EquipmentManagement/MaintenanceTask';
import InspectionEvaluation from '@/pages/applications/EquipmentManagement/InspectionEvaluation';
import LubricationManagement from '@/pages/applications/EquipmentManagement/LubricationManagement';
import EquipmentHandover from '@/pages/applications/EquipmentManagement/EquipmentHandover';
import NavigateTextBadge from '@/components/NavigateTextBadge';
import ScanScreen from '@/pages/ScanScreen';

function NavigateText({
  routeName,
  params,
  iconName = 'iconbianzu',
  name = '退出',
}) {
  return (
    <Touchable>
      <Button
        onPress={() => (routeName ? navigate(routeName, params) : goBack())}
        icon={<IconFont name={iconName} size={15} color="white" />}
        title={name}
        type="clear"
        titleStyle={{paddingLeft: 4, color: '#fff'}}
      />
    </Touchable>
  );
}

// 堆栈导航
export const stackRoutes = [
  {
    text: '首页',
    icon: <IconFont name="iconbaojingcishu" size={32} />,
    name: 'Home',
    title: '首页',
    component: Home,
    show: false,
    headerLeft: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '数据查询',
    icon: <IconFont name="iconbaojingcishu" size={32} />,
    name: 'shujuchaxun',
    title: '数据查询',
    component: DynamicMonitor,
    show: true,
    headerLeft: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '工艺监控',
    icon: <IconFont name="iconbaojingdengji_weidianliang" size={32} />,
    name: 'gongyijiank',
    title: '数据查询',
    component: DynamicMonitor,
    show: true,
    headerLeft: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '数字驾驶舱',
    icon: <IconFont name="iconbaocun" size={32} />,
    name: 'jiashicang',
    title: '数据查询',
    component: DynamicMonitor,
    show: true,
    headerLeft: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '动态监控',
    icon: <IconFont name="iconanzuzhixuanze" size={32} />,
    name: 'DynamicMonitor',
    title: '动态监控',
    component: DynamicMonitor,
    show: true,
    headerLeft: () => <NavigateText routeName={null} params={{}} />,
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '故障维修',
    icon: <IconFont name="iconzuoduiqi" size={32} />,
    name: 'MaintenanceTask',
    title: '故障维修',
    component: MaintenanceTask,
    show: true,
    headerLeft: () => <NavigateText routeName={null} params={{}} />,
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '点巡检',
    icon: <IconFont name="iconbianliangzhi" size={32} />,
    name: 'InspectionEvaluation',
    title: '点巡检',
    component: InspectionEvaluation,
    show: true,
    headerLeft: () => <NavigateText routeName={null} params={{}} />,
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '设备润滑',
    icon: <IconFont name="iconbianjifankui" size={32} />,
    name: 'LubricationManagement',
    title: '设备润滑',
    component: LubricationManagement,
    show: true,
    headerLeft: () => <NavigateText routeName={null} params={{}} />,
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
  {
    text: '设备交接班',
    icon: <IconFont name="iconbianjifankui" size={32} />,
    name: 'EquipmentHandover',
    title: '设备交接班',
    component: EquipmentHandover,
    show: true,
    headerLeft: () => <NavigateText routeName={null} params={{}} />,
    headerRight: () => (
      <View>
        <Text>aa</Text>
      </View>
    ),
  },
];

/**
 * 配置所有需要modal方式打开的路由
 */
export const modalStackRoutes = [
  {
    text: '设备交接班详情',
    icon: <IconFont name="iconbianjifankui" size={32} />,
    name: 'DynamicMonitor/Detail',
    title: '设备交接班详情',
    component: EquipmentHandover,
    show: true,
    headerLeft: () => (
      <NavigateText
        routeName={'DynamicMonitor'}
        name={'返回'}
        iconName={'iconbaojingcishu'}
        params={{}}
      />
    ),
    headerRight: () => <NavigateTextBadge />,
  },
  {
    text: '扫描二维码',
    icon: <IconFont name="iconbianjifankui" size={32} />,
    name: 'DynamicMonitor/ScanScreen',
    title: '扫描二维码',
    component: ScanScreen,
    show: true,
    headerLeft: () => (
      <NavigateText
        routeName={'DynamicMonitor'}
        name={'返回'}
        iconName={'iconbaojingcishu'}
        params={{}}
      />
    ),
    headerRight: () => <View />,
  },
];

export default {
  stackRoutes,
  modalStackRoutes,
};
