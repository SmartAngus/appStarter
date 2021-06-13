import React from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Button,
  Toast,
  WhiteSpace,
  WingBlank,
  List,
  InputItem,
} from '@ant-design/react-native';
import Config from 'react-native-config';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '@/models';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import Input from '@/components/Input';

interface Values {
  username: string;
  password: string;
}

const initialValues: Values = {
  username: '',
  password: '',
};

const mapStateToProps = ({loading}: RootState) => {
  return {
    loading: loading.effects['userInfo/login'],
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

const validationSchema = Yup.object().shape({
  username: Yup.string().trim().required('请输入您的账号'),
  password: Yup.string().trim().required('请输入密码'),
});

class Login extends React.Component<ModelState> {
  onSubmit = (values: Values) => {
    console.log('>>>>login', values);
    const {dispatch} = this.props;
    dispatch({
      type: 'userInfo/login',
      payload: values,
    });
  };
  render() {
    const {loading} = this.props;
    return (
      <SafeAreaView>
        <ScrollView keyboardShouldPersistTaps="handled">
          <WingBlank>
            <Text style={styles.logo}>用户登录</Text>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={this.onSubmit}>
              {({handleSubmit}) => {
                return (
                  <View>
                    <Field
                      name="username"
                      placeholder="请输入账号"
                      component={Input}
                    />
                    <Field
                      name="password"
                      placeholder="请输入密码"
                      component={Input}
                      secureTextEntry
                    />
                    <WhiteSpace />
                    <Button
                      type="primary"
                      disabled={loading}
                      loading={loading}
                      onPress={handleSubmit}>
                      登录
                    </Button>
                  </View>
                );
              }}
            </Formik>
          </WingBlank>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    color: '#ff4000',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 40,
  },
  loginBtn: {
    marginTop: 40,
    margin: 10,
    height: 40,
    borderRadius: 20,
    borderColor: '#ff4000',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#ff4000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default connector(Login);
