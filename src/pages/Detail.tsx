import React from 'react';
import {View, Text} from 'react-native';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator';
const mapStateForProps = ({userInfo}: RootState) => ({
  userInfo: userInfo.user,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IHomeProps extends ModelState {
  navigation: RootStackNavigation;
}
class Detail extends React.Component<IHomeProps> {
  componentDidMount() {
    const {navigation} = this.props;
    navigation.setOptions({
      title: 'zheshixiangq',
    });
  }

  render() {
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}
export default Detail;
