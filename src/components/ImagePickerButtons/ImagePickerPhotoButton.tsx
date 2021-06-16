import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {wp} from '@/utils';
import {Modal, WhiteSpace} from '@ant-design/react-native';
import {Button} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import IconFont from '@/icons';

interface IImagePickerPhotoButtonProps {
  text?: string;
  onPhotoDone?: (photos: any) => void;
}

export const ImagePickerPhotoButton = (props: IImagePickerPhotoButtonProps) => {
  const [visible, setVisible] = useState(false);
  const [photos, setPhotos] = React.useState<any>([]);
  const {text = '拍照或选择照片', onPhotoDone} = props;
  const onPress = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onButtonPress = React.useCallback(
    (type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, res => {
          if (res.assets) {
            photos.push(res.assets[0]);
            setPhotos(photos);
            if (typeof onPhotoDone === 'function') {
              onPhotoDone(photos);
            }
          }
        });
      } else {
        ImagePicker.launchImageLibrary(options, res => {
          if (res.assets) {
            photos.push(res.assets[0]);
            setPhotos(photos);
            if (typeof onPhotoDone === 'function') {
              onPhotoDone(photos);
            }
          }
        });
      }
      onClose();
    },
    [photos.length],
  );
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'skyblue' : 'steelblue',
          },
          styles.container,
        ]}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
      <SafeAreaView>
        <Modal
          popup
          visible={visible}
          animationType="slide-up"
          style={{
            height: 200,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button
            type="clear"
            onPress={() => onButtonPress('capture', takePhotoOpts)}
            style={{width: wp(100)}}
            title="拍照"
          />
          <WhiteSpace size="lg" />
          <Button
            type="clear"
            onPress={() => onButtonPress('library', selectPhotoOpts)}
            style={{width: wp(100)}}
            title="从相册选择"
          />
          <WhiteSpace size="lg" />
          <Button
            type="clear"
            icon={<IconFont name="iconbaojingcishu" size={15} color="orange" />}
            onPress={onClose}
            style={{width: wp(100)}}
            title="取消"
          />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

type Action = ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
const takePhotoOpts: Action = {
  saveToPhotos: true,
  mediaType: 'photo',
  quality: 1,
  includeBase64: false,
};

const selectPhotoOpts: Action = {
  maxHeight: 4200,
  maxWidth: 4200,
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: false,
};

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    minWidth: '45%',
    maxWidth: '100%',
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

// export default ImagePickerPhotoButton;
