import {StyleSheet, View, Animated, Easing, Text, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import React, {Component} from 'react';
import {RootState} from '@/models';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator';
import {BarcodeMask} from '@nartc/react-native-barcode-mask';

const mapStateForProps = ({account, dynamicMonitor}: RootState) => ({
  userInfo: account.user,
  categories: dynamicMonitor.categories,
  myCategories: dynamicMonitor.myCategories,
});

const connector = connect(mapStateForProps);

// 得到connector的类型
type ModelState = ConnectedProps<typeof connector>;

interface IScanScreenProps extends ModelState {
  navigation: RootStackNavigation;
}

const CAM_VIEW_HEIGHT = Dimensions.get('screen').width * 1.5;
const CAM_VIEW_WIDTH = Dimensions.get('screen').width;

const leftMargin = 100;
const topMargin = 50;
const frameWidth = 200;
const frameHeight = 250;

const scanAreaX = leftMargin / CAM_VIEW_HEIGHT;
const scanAreaY = topMargin / CAM_VIEW_WIDTH;
const scanAreaWidth = frameWidth / CAM_VIEW_HEIGHT;
const scanAreaHeight = frameHeight / CAM_VIEW_WIDTH;

const rectOfInterest = {
  x: scanAreaX,
  y: scanAreaY,
  width: scanAreaWidth,
  height: scanAreaHeight,
};

class ScanScreen extends Component<IScanScreenProps> {
  state: any;
  camera: any;
  constructor(props: any) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: -200,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    } as any).start(() => this.startAnimation());
  };
  //  识别二维码
  onBarCodeRead = (result: any) => {
    const {navigation} = this.props;
    const {data} = result;
    if (data) {
      console.log('codeinfo>>>', data);
      navigation.navigate('DynamicMonitor', {qrdata: data});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          rectOfInterest={rectOfInterest}
          cameraViewDimensions={{
            width: 200,
            height: 200,
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          useNativeZoom={true}
          onBarCodeRead={this.onBarCodeRead}>
          <BarcodeMask
            backgroundColor="#000"
            showAnimatedLine={false}
            maskOpacity={0.5}
            width={200}
            height={200}
          />
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
            <Animated.View
              style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]},
              ]}
            />
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描
            </Text>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    marginTop: 29,
    height: 201,
    width: 200,
    borderWidth: 1,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: '#00FF00',
  },
});
export default ScanScreen;
