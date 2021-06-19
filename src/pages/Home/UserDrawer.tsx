/**
 * @file 首页=》用户信息页面
 */
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {WhiteSpace, WingBlank, Modal, Button} from '@ant-design/react-native';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator';
import {Avatar, Button as EButton} from 'react-native-elements';
import IconFont from '@/icons';
import {DEFAULT_AVATAR} from '@/assets';
import {Field, Formik} from 'formik';
import Input from '@/components/Input';
import * as Yup from 'yup';
import {tranRSA} from '@/utils/common';

const mapStateForProps = ({loading, account}: RootState) => ({
  user: account.user,
  loading: loading.effects['account/fetchUpdatePassword'],
});

const connector = connect(mapStateForProps);

type ModelState = ConnectedProps<typeof connector>;

interface IUserDrawerProps extends ModelState {
  navigation: RootStackNavigation;
  [key: string]: any; // 其他属性
}

const validationSchema = Yup.object().shape({
  account: Yup.string().trim().required('请输入您的账号'),
  oldPassword: Yup.string()
    .trim()
    .min(6, '密码长度最小为6')
    .max(12)
    .required('请输入密码'),
  newPassword: Yup.string()
    .trim()
    .min(6, '密码长度最小为6')
    .max(12)
    .required('请输入密码'),
  reNewPassword: Yup.string()
    .trim()
    .min(6, '密码长度最小为6')
    .max(12)
    .required('请输入密码'),
});

function UserDrawer(props: IUserDrawerProps) {
  const {user, navigation, dispatch, loading} = props;
  const {name: userName, roleName, account} = user;
  // 显示密码修改弹窗
  const [visible, setVisible] = useState(false);
  // 推出按钮
  const onLogoutPress = () => {
    console.log('>>>退出登录');
    Modal.alert(
      '提示',
      '您确定要退出登录吗？',
      [
        {text: '取消', onPress: () => {}, style: {color: 'blue'}},
        {
          text: '确认',
          onPress: () => {
            dispatch({
              type: 'account/logout',
            });
          },
          style: {color: 'red'},
        },
      ],
      () => false,
    );
  };
  // 打开修改密码弹窗
  const openModifyAccountPass = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    setVisible(true);
  };
  const footerButtons = [
    {text: 'Cancel', onPress: () => console.log('cancel')},
    {text: 'Ok', onPress: () => console.log('ok')},
  ];
  const onClose = () => {
    setVisible(false);
  };
  // 提交修改密码
  const onSubmit = (values: any) => {
    const {dispatch} = props;
    const {account, newPassword, oldPassword} = values;
    console.log(values);
    const payload = {
      account: account.toLowerCase(),
      oldPassword: tranRSA(oldPassword),
      newPassword: tranRSA(newPassword),
    };
    dispatch({
      type: 'account/fetchUpdatePassword',
      payload,
    });
  };
  // 渲染修改密码弹窗
  const renderModifyModal = useMemo(() => {
    const initialValues: any = {
      account,
      newPassword: '',
      oldPassword: '',
      reNewPassword: '',
    };
    return (
      <Modal
        title="Title"
        transparent
        onClose={onClose}
        maskClosable={false}
        visible={visible}
        closable={false}
        footer={footerButtons}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          dirty={true}
          onSubmit={onSubmit}>
          {formikProps => {
            return (
              <View>
                <Field
                  name="account"
                  placeholder="请输入账号"
                  component={Input}
                />
                <Field
                  name="oldPassword"
                  placeholder="请输入旧密码"
                  component={Input}
                  secureTextEntry
                />
                <Field
                  name="newPassword"
                  placeholder="请输入新密码"
                  component={Input}
                  secureTextEntry
                />
                <Field
                  name="reNewPassword"
                  placeholder="请再次确认密码"
                  component={Input}
                  secureTextEntry
                />
                <WhiteSpace />
                <Button
                  type="primary"
                  disabled={loading}
                  loading={loading}
                  onPress={formikProps.handleSubmit}>
                  登录
                </Button>
              </View>
            );
          }}
        </Formik>
      </Modal>
    );
  }, [visible, account, loading]);
  return (
    <DrawerContentScrollView {...props}>
      <WingBlank>
        <View style={styles.avatarContainer}>
          <View>
            <Avatar rounded size={'large'} source={DEFAULT_AVATAR} />
          </View>
          <View>
            <WhiteSpace />
            <WingBlank />
            <Text>{userName}</Text>
            <Text>{roleName}</Text>
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
        <DrawerItem label="修改密码" onPress={openModifyAccountPass} />
        {renderModifyModal}
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
