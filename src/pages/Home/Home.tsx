import React from 'react';
import {RootStackNavigation} from '@/navigator';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Grid} from '@ant-design/react-native';
import IconFont from '@/icons';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import Touchable from '@/components/Touchable';

const mapStateForProps = ({userInfo}: RootState) => ({
  userInfo: userInfo.user,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IHomeProps extends ModelState {
  navigation: RootStackNavigation;
}

const data = [
  {
    text: '数据查询',
    icon: <IconFont name="iconbaojingcishu" size={32} />,
  },
  {
    text: '工艺监控',
    icon: <IconFont name="iconbaojingdengji_weidianliang" size={32} />,
  },
  {
    text: '数字驾驶舱',
    icon: <IconFont name="iconbaocun" size={32} />,
  },
  {
    text: '设备管理',
    icon: <IconFont name="iconanzuzhixuanze" size={32} />,
  },
  {
    text: '故障维修',
    icon: <IconFont name="iconzuoduiqi" size={32} />,
  },
  {
    text: '电讯见',
    icon: <IconFont name="iconbianliangzhi" size={32} />,
  },
  {
    text: '设备润滑',
    icon: <IconFont name="iconbianjifankui" size={32} />,
    nav: 'BottomTabs',
  },
];

const HomeHeaderLeft = ({navigation}: any) => {
  const openDrawer = () => {
    console.log('打开用户信息');
    navigation.toggleDrawer();
  };
  return (
    <Touchable onPress={openDrawer}>
      <IconFont name="iconbianjifankui" size={16} />
    </Touchable>
  );
};

class Home extends React.Component<IHomeProps> {
  componentDidMount() {
    const {navigation} = this.props;
    // 设置当前页面的左边组件
    navigation.setOptions({
      headerLeft: () => {
        return <HomeHeaderLeft navigation={navigation} />;
      },
    });
  }

  onPressItem(item, index) {
    const {navigation} = this.props;
    console.log('>>>>>>nav>>>', item);
    navigation.replace('EquipmentManagement', {});
    // navigation.navigate('EquipmentManagement', {
    //   screen: 'LubricationManagement',
    //   params: { user: 'jane' },
    // });
    // navigation.navigate('Detail', {item});
  }
  render() {
    const {userInfo} = this.props;
    const {username, age} = userInfo;
    return (
      <ScrollView>
        <View style={[{margin: 10}]}>
          <Text>
            {username}-{age}
          </Text>
        </View>
        <View style={[{padding: 10}]}>
          <Grid
            data={data}
            hasLine={false}
            onPress={this.onPressItem.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // elevation: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#dedede',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    backgroundColor: '#f8f8f8',
    padding: 5,
    marginBottom: 5,
  },
  bottom: {
    flexDirection: 'row',
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
});

export default connector(Home);
