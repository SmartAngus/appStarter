import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableHighlight,
} from 'react-native';
import IconFont from '@/icons';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import {IChannel} from '@/models/home';
import Carousel from '@/pages/Home/Carousel';
import Guesses from '@/pages/Home/Gusses';

const mapStateToProps = ({home}: RootState) => {
  return {
    channels: home.channels,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface ChannelItemProps {
  item: IChannel;
  onPress: (data: IChannel) => void;
}

const ChannelItem = ({item, onPress}: ChannelItemProps) => {
  const handleItemPress = () => {
    if (typeof onPress === 'function') {
      onPress(item);
    }
  };
  return (
    <TouchableHighlight
      onPress={handleItemPress}
      activeOpacity={0.6}
      underlayColor="#DDDDDD">
      <View style={styles.itemWraper}>
        <Image source={{uri: item.image}} style={styles.img} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.remark} numberOfLines={2}>
            {item.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.playedView}>
              <IconFont name="iconbaojingcishu" size={14} />
              <Text>{item.played}</Text>
            </View>
            <View style={styles.playing}>
              <IconFont name="iconbaojingcishu" size={14} />
              <Text>{item.playing}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

class Channels extends React.Component<ModelState> {
  onPress = (data: IChannel) => {
    console.log(data);
  };
  renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem item={item} onPress={this.onPress} />;
  };
  keyExtractor = (item: IChannel) => {
    // 性能优化s
    return item.id;
  };
  render() {
    const {channels} = this.props;
    return (
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <Carousel />
              <Guesses />
            </>
          }
          data={channels}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemWraper: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5, // android
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    backgroundColor: '#f8f8f8',
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'flex-end',
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playing: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default connector(Channels);
