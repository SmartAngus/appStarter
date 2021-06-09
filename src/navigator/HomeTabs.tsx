import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home/';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import AnimatedGradientTransition from '@/components/LinearAnimatedGradient';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const colors = [
  ['#ccc', '#f2f2f2'],
  ['orange', 'white'],
  ['#543212', '#f2f2f2'],
  ['#f42512', '#f2f2f2'],
];

const mapStateToProps = ({home}: RootState) => {
  return {
    linerColors: colors[home.activeSlideIndex] || undefined,
  };
};

const connector = connect(mapStateToProps);

type ModalState = ConnectedProps<typeof connector>;

type HomeTabsProps = MaterialTopTabBarProps & ModalState;

class HomeTabs extends React.Component<HomeTabsProps> {
  renderTabBar = (prop: HomeTabsProps) => {
    const {linerColors = ['blue', 'orange']} = this.props;
    return (
      <View style={styles.homeTabBar}>
        <AnimatedGradientTransition
          colors={linerColors}
          style={styles.linearGradient}>
          <View style={styles.tabbarContainer}>
            <MaterialTopTabBar {...prop} style={styles.tabbar} />
            <TouchableHighlight style={styles.categoryBtn}>
              <Text>搜索</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.searchContainer}>
            <TouchableHighlight style={styles.searchInput}>
              <Text>搜索按钮</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.searchBtn}>
              <Text>历史记录</Text>
            </TouchableHighlight>
          </View>
        </AnimatedGradientTransition>
      </View>
    );
  };
  render() {
    return (
      <Tab.Navigator
        lazy
        tabBar={this.renderTabBar}
        sceneContainerStyle={styles.sceneContainer}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {width: 80},
          indicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          activeTintColor: '#f86442',
          inactiveTintColor: '#333',
        }}>
        <Tab.Screen name="推荐" component={Home} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  homeTabBar: {
    paddingTop: getStatusBarHeight(true),
    height: 160,
  },
  tabbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabbar: {
    flex: 1,
    elevation: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  categoryBtn: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchBtn: {
    marginLeft: 15,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingTop: getStatusBarHeight(true),
  },
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default connector(HomeTabs);
