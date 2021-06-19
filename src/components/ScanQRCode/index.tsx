import React, {PureComponent} from 'react';
import {StyleSheet, Text, Animated, View, Easing} from 'react-native';
import {RNCamera} from 'react-native-camera';

class ScanQRCode extends PureComponent<any> {
  camera: any;
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
    };
  }
  onBarCodeRead = (result: any) => {
    const {data} = result; //只要拿到data就可以了
    //扫码后的操作
    console.log(data);
  };
  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: -200,
      duration: 1500,
      easing: Easing.linear,
    } as any).start(() => this.startAnimation());
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          onBarCodeRead={this.onBarCodeRead}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
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
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ScanQRCode;
