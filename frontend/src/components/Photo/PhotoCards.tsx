import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

type Props = {
  photos : readonly string[];
  addPhoto: (string) => void;
}

const PhotoCards = ({photos, addPhoto}: Props) => {
  const withPhoto = (
    <ScrollView horizontal style={styles.imageContainer}>
      {photos.map((photo) => (
          <Image
            style={styles.image}
            source={{uri: photo}}

          />
      ))}

      <TouchableOpacity 
        onPress={() => addPhoto("temp")}
      >
        <Image 
          style={styles.image}
          source={require('../../assets/add-photos.png')}
        />
      </TouchableOpacity>     
    </ScrollView>
  );
  
  const noPhoto = (
    <View style={styles.noPhotos}>
      <TouchableOpacity 
          style={{alignItems: 'center'}}
          onPress={() => addPhoto("temp")}
        >
          <Image 
            style={styles.image}
            source={require('../../assets/add-photos.png')}
          />
          <Text style={styles.text}>
            You don't have any photos
          </Text>
        </TouchableOpacity>    
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Photos
      </Text>
      {photos.length > 0 ? withPhoto : noPhoto}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    marginRight: 10,
    borderRadius: 10,
    height: 130,
    width: 130
  },
  noPhotos: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  },
  text: {
    fontFamily: 'karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    marginTop: 5,
  },
});

export default PhotoCards;