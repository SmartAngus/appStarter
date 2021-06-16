import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Modal,
} from 'react-native';
import {Image} from 'react-native-elements';
import {useEffect, useMemo} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';

interface IPhotoPreviewProps {
  photos: any[];
}

export default function PhotoPreview(props: IPhotoPreviewProps) {
  // 预览图片弹窗显示与隐藏
  const [visible, setVisible] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);
  const {photos} = props;
  console.log(photos.length);
  useEffect(() => {
    console.log('>>>>>PhotoPreview');
  }, [photos]);

  const previewImage = (index: number) => {
    setVisible(true);
    setImageIndex(index);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const renderPhotosModal = useMemo(() => {
    const images = photos.map((photo: any) => {
      const {uri} = photo;
      return {
        url: uri,
      };
    });
    return (
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent={false}>
        <ImageViewer
          imageUrls={images}
          onClick={toggleOverlay}
          index={imageIndex}
        />
      </Modal>
    );
  }, [photos.length, visible, imageIndex]);

  return (
    <View style={styles.container}>
      {(photos || []).map(({uri}: any, index) => (
        <View key={uri} style={styles.image}>
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            onPress={() => previewImage(index)}
            style={{width: 100, height: 100}}
            source={{uri: uri}}
          />
        </View>
      ))}
      {renderPhotosModal}
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  image: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#dcecfb',
    marginVertical: 8,
    padding: 2,
    borderRadius: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'black',
  },
  image: {
    marginVertical: 12,
    alignItems: 'center',
  },
});
