/**
 * @file 设备管理 > 动态监控
 */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {WingBlank, Button, Modal} from '@ant-design/react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hp} from '@/utils';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import Touchable from '@/components/Touchable';
import IconFont from '@/icons';
import {Header} from 'react-native-elements';
import RNEChartsPro from 'react-native-echarts-pro';
import MyLineChart from '@/pages/applications/EquipmentManagement/DynamicMonitor/MyLineChart';
import BarChartScreen from '@/pages/applications/EquipmentManagement/DynamicMonitor/BarChartScreen';
import ImagePickerAndPhoto from '@/components/ImagePickerAndPhoto';
// const RNEChartsPro = require('react-native-echarts-pro');

const mapStateForProps = ({userInfo}: RootState) => ({
  userInfo: userInfo.user,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IDynamicMonitorProps extends ModelState {
  navigation: RootStackNavigation;
}

const pieOption: any = {
  color: this.colors,
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: '#668BEE',
    borderWidth: 1,
    padding: [5, 10],
    textStyle: {
      color: '#24283C',
      fontSize: 12,
    },
    trigger: 'item',
    // formatter: '{b} <br/>{c} : ({d}%)',
    formatter: function (a) {
      return (
        '<i style="display: inline-block;width: 10px;height: 10px;background: ' +
        a.color +
        ';margin-right: 5px;border-radius: 50%;}"></i>' +
        a.name +
        '</br>测试:  ' +
        a.value +
        '个 ' +
        '<br>占比:  ' +
        a.percent +
        '%'
      );
    },
  },
  series: [
    {
      name: '广告访问来源',
      type: 'pie',
      legendHoverLink: true,
      hoverAnimation: true,
      avoidLabelOverlap: true,
      startAngle: 180,
      radius: '55%',
      center: ['50%', '35%'],
      data: [
        {value: 105.2, name: 'android'},
        {value: 310, name: 'iOS'},
        {value: 234, name: 'web'},
      ],
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 12,
            color: '#23273C',
          },
        },
      },
      emphasis: {
        lable: {
          show: true,
          fontSize: 12,
          color: '#668BEE',
        },
        itemStyle: {
          show: true,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

const DynamicMonitor: React.FC<IDynamicMonitorProps> = props => {
  const [visible, setVisible] = useState(false);
  const {navigation} = props;
  useEffect(() => {
    console.log('>>>>>DynamicMonitor>>>>>>');
    // 设置当前页面的左边组件
  }, [navigation]);
  const onClose = () => {
    setVisible(false);
  };
  const openDetail = () => {
    navigation.navigate('Detail');
  };
  return (
    <View style={{marginTop: 60}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <WingBlank>
          <View>
            <Text>DynamicMonitor</Text>
            <Button onPress={() => setVisible(true)}>popup</Button>
            <Button onPress={openDetail}>打开详情页</Button>
          </View>
          <View key={1} style={{height: 400, paddingTop: 25}}>
            <RNEChartsPro height={370} option={pieOption} />
          </View>
          <View key={2} style={{height: 200, paddingTop: 25}}>
            <MyLineChart />
          </View>
          <View key={3} style={{height: 300, paddingTop: 25}}>
            <BarChartScreen />
          </View>
          <View>
            <ImagePickerAndPhoto />
          </View>
        </WingBlank>
        <Modal
          popup
          visible={visible}
          animationType="slide-up"
          style={{height: hp(90)}}>
          <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
            <Text style={{textAlign: 'center'}}>Content...</Text>
            <Text style={{textAlign: 'center'}}>Content...</Text>
          </View>
          <Button type="primary" onPress={onClose}>
            close modal
          </Button>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default connector(DynamicMonitor);
