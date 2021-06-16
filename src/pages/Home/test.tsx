import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models';
import {RootStackNavigation} from '@/navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconFont from '@/icons';
import Carousel from '@/pages/Home/Carousel';
import Guesses from '@/pages/Home/Gusses';
import Channels from '@/pages/Home/Channels';

const mapStateForProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/addAsync'],
  channels: home.channels,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IHomeProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IHomeProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    // home是namespace
    dispatch({type: 'home/fetchChannels'});
  }

  handlePress() {
    console.log('---', this.props);
    this.props.navigation.navigate('Detail');
  }
  handleAdd = () => {
    const {dispatch} = this.props;
    // home是namespace
    dispatch({type: 'home/add', payload: {num: 10}});
  };
  handleAddAsync = () => {
    const {dispatch} = this.props;
    // home是namespace
    dispatch({type: 'home/addAsync', payload: {num: 6}});
  };
  renderItem = () => {
    const {loading} = this.props;
    return (
      <View>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>{loading}</Text>
      </View>
    );
  };
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View>
          <Text>item</Text>
          <Text>item</Text>
          <Text>item</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default connector(Home);
