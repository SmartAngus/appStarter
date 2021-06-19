/**
 * @file 设备管理 > 动态监控
 */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {WingBlank, Button, Modal} from '@ant-design/react-native';
import {hp} from '@/utils';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import RNEChartsPro from 'react-native-echarts-pro';
import MyLineChart from '@/pages/applications/EquipmentManagement/DynamicMonitor/MyLineChart';
import BarChartScreen from '@/pages/applications/EquipmentManagement/DynamicMonitor/BarChartScreen';
import ImagePickerAndPhoto from '@/components/ImagePickerAndPhoto';
import NavigateTextBadge from '@/components/NavigateTextBadge';

const mapStateForProps = ({account, dynamicMonitor}: RootState) => ({
  userInfo: account.user,
  categories: dynamicMonitor.categories,
  myCategories: dynamicMonitor.myCategories,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IDynamicMonitorProps extends ModelState {
  navigation: RootStackNavigation;
  route: any;
}

const pieOption: any = {
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
  const {navigation, categories, myCategories, route} = props;
  const {
    params: {qrdata},
  } = route;
  const payload = {
    createTimeStart: '2021-06-01 00:00:00',
    createTimeEnd: '2021-06-16 23:59:59',
  };
  useEffect(() => {
    console.log('>>>>>DynamicMonitor>>>>>>');
    navigation.setOptions({
      headerRight: () => (
        <NavigateTextBadge name={'haha'} showStatus={true} status="success" />
      ),
    });
    // 设置当前页面的左边组件
  }, [navigation]);

  useEffect(() => {
    console.log(route);
  }, [route, qrdata]);

  useEffect(() => {
    console.log('>>>>获取报表数据');
    const {dispatch} = props;
    console.log(dispatch);
    dispatch({
      type: 'dynamicMonitor/getInspection',
      payload: {
        ...payload,
      },
    });
  }, []);
  const onClose = () => {
    setVisible(false);
  };
  const openDetail = () => {
    navigation.navigate('DynamicMonitor/Detail');
  };
  const scanQRCode = () => {
    navigation.navigate('DynamicMonitor/ScanScreen', {});
  };
  const getPhotos = (photos: any) => {
    // console.log('>>>getPhotos', photos);
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
          <View style={{height: 200, paddingTop: 25}}>
            <ImagePickerAndPhoto getPhotos={getPhotos} />
          </View>
          <View>
            <Button onPress={scanQRCode}>扫一扫</Button>
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
