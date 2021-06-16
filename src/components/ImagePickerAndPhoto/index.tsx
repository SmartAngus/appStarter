import * as React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {ImagePickerPhotoButton} from '@/components/ImagePickerButtons';
import PhotoPreview from '@/components/ImagePickerButtons/PhotosPreview';

//图片选择器

// //图片选择器参数设置
// var options = {
//   title: '请选择图片来源',
//   cancelButtonTitle: '取消',
//   takePhotoButtonTitle: '拍照',
//   chooseFromLibraryButtonTitle: '相册图片',
//   customButtons: [{name: 'hangge', title: 'hangge.com图片'}],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

interface IImagePickerAndPhotoProps {
  getPhotos?: (photo: any) => void;
}

function ImagePickerAndPhoto(props: IImagePickerAndPhotoProps) {
  const [photos, setPhotos] = React.useState<any>([]);
  const {getPhotos} = props;
  const handlePhotoDone = (images: any) => {
    setPhotos(Array.from(images)); // 解决多次拍照组件不刷新的问题
    if (typeof getPhotos === 'function') {
      getPhotos(images);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImagePickerPhotoButton onPhotoDone={handlePhotoDone} />
        <PhotoPreview photos={photos} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});

export default ImagePickerAndPhoto;
