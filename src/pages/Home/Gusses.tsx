import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models';
import {IGuess} from '@/models/home';

const mapStateToProps = ({home}: RootState) => {
  return {
    guesses: home.guesses,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

const Item = ({name, image, id}) => {
  return (
    <View style={styles.item}>
      <Image source={{uri: image}} style={{width: '100%', height: 50}} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};
class Guesses extends React.Component<ModelState> {
  componentDidMount() {
    this.fetchGuess();
  }
  fetchGuess = () => {
    const {dispatch} = this.props;
    dispatch({type: 'home/fetchGuess'});
  };
  renderItem = ({item}) => <Item {...item} />;

  render() {
    const {guesses} = this.props;
    return (
      <View>
        <FlatList data={guesses} renderItem={this.renderItem} numColumns={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#fff',
  },
  item: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 14,
  },
});

export default connector(Guesses);
