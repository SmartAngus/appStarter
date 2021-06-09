import React from 'react';
import SnapCarousel, {
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import {viewportWidth, wp, hp} from '@/utils';
import {Image, StyleSheet, View} from 'react-native';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';

const data = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11041710134%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620216801&t=63be6be40f5a156d07aef3606dde3648',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181207%2F59de84168e7742acac4bc3b4200a3837.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620216801&t=4aad6808d28ff72dcb15431aafbf343e',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsimg2.bigbigwork.com%2Fjhb%2F25c56a004e6c11e90c7d713b49da0385.jpg&refer=http%3A%2F%2Fsimg2.bigbigwork.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620216801&t=dca04f590d00f53f4cf5bd5a6846e196',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wallcoo.com%2Fcartoon%2FIron_Maiden_HD_Wallpapers_Derek_Riggs_Artwork%2Fwallpapers%2F1440x900%2Fsbitgroup-2_Iron_Maiden_Album_Artwork_by_Derek_Riggs.jpg&refer=http%3A%2F%2Fwww.wallcoo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620216801&t=5a6382123413583b5c20a9d292995c8a',
];

const slideWidth = viewportWidth;
const slideHeight = hp(26);
const itemWidth = wp(90) + wp(2) * 2;

const mapStateToProps = ({home}: RootState) => {
  return {
    activeSlideIndex: home.activeSlideIndex,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Carousel extends React.Component<any, any> {
  renderItem = (
    {item}: {item: string},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.containerStyle}
        parallaxFactor={0.8}
        {...parallaxProps}
      />
    );
  };
  get pagination() {
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          dotsLength={data.length}
          containerStyle={styles.paginationContainer}
          activeDotIndex={this.props.activeSlideIndex}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
        />
      </View>
    );
  }
  onSnapToItem = (index: number) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/setState',
      payload: {
        activeSlideIndex: index,
      },
    });
  };
  render() {
    return (
      <View>
        <SnapCarousel
          layout={'default'}
          data={data}
          renderItem={this.renderItem.bind(this)}
          itemWidth={itemWidth}
          sliderWidth={slideWidth}
          hasParallaxImages
          loop
          autoplay
          onSnapToItem={this.onSnapToItem}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: '#992211',
    resizeMode: 'cover',
  },
  containerStyle: {
    width: itemWidth,
    height: slideHeight,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -40,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'orange',
  },
});

export default connector(Carousel);
