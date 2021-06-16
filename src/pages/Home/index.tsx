import React from 'react';
import {RootStackNavigation} from '@/navigator';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Grid} from '@ant-design/react-native';
import IconFont from '@/icons';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import Touchable from '@/components/Touchable';
import {stackRoutes} from '@/navigator/routes';
import {Button} from 'react-native-elements';

const mapStateForProps = ({account}: RootState) => ({
  user: account.user,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IHomeProps extends ModelState {
  navigation: RootStackNavigation;
}

const HomeHeaderLeft = ({navigation}: any) => {
  const openDrawer = () => {
    console.log('打开用户信息');
    navigation.toggleDrawer();
  };
  return (
    <Touchable>
      <Button
        onPress={() => openDrawer()}
        icon={<IconFont name="iconbianjifankui" size={15} color="white" />}
        title=""
        type="clear"
        titleStyle={{paddingLeft: 4, color: '#fff'}}
      />
    </Touchable>
  );
};

class Index extends React.Component<IHomeProps> {
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
    navigation.navigate(item.name, {});
    // navigation.navigate('EquipmentManagement', {
    //   screen: 'LubricationManagement',
    //   params: { user: 'jane' },
    // });
    // navigation.navigate('Detail', {item});
  }
  render() {
    const {user} = this.props;
    const {name} = user;
    return (
      <ScrollView>
        <View style={[{margin: 10}]}>
          <Text>{name}</Text>
        </View>
        <View style={[{padding: 10}]}>
          <Grid
            data={stackRoutes}
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

export default connector(Index);
