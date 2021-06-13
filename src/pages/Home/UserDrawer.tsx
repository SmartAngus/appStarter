/**
 * @file 首页=》用户信息页面
 */
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator';
import {Avatar, Button as EButton} from 'react-native-elements';
import IconFont from '@/icons';

const mapStateForProps = ({userInfo}: RootState) => ({
  user: userInfo.user,
});

const connector = connect(mapStateForProps);

type ModelState = ConnectedProps<typeof connector>;

interface IUserDrawerProps extends ModelState {
  navigation: RootStackNavigation;
}
const avatar =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11041710134%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620216801&t=63be6be40f5a156d07aef3606dde3648';
function UserDrawer(props: IUserDrawerProps) {
  const {user, navigation, dispatch} = props;
  // 推出按钮
  const onLogoutPress = () => {
    console.log('>>>退出登录');
    dispatch({
      type: 'userInfo/logout',
    });
  };
  return (
    <DrawerContentScrollView {...props}>
      <WingBlank>
        <View style={styles.avatarContainer}>
          <View>
            <Avatar
              rounded
              size="large"
              title="LW"
              source={{
                uri: avatar,
              }}
            />
          </View>
          <View>
            <WhiteSpace />
            <WingBlank />
            <Text>{user?.username}</Text>
          </View>
        </View>
        <View>
          <EButton
            type="clear"
            icon={
              <IconFont
                name="iconanzuzhixuanze"
                size={18}
                style={{marginRight: 10}}
                color="red"
              />
            }
            title="退出"
            onPress={onLogoutPress}
          />
        </View>
        <DrawerItem
          label="Close drawer"
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </WingBlank>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'column',
    alignContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default connector(UserDrawer);
