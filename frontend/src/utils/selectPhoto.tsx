import * as ImagePicker from 'expo-image-picker';

const pickImage = async (setImage: React.Dispatch<any>) => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

export { pickImage }
