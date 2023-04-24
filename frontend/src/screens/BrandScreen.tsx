import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, Image, Button, TouchableOpacity, Linking } from "react-native";
import {BrandWithId} from "../../../common/db-types"
import {dummyBrands, sophiaReview} from "../dummy/brands"
import BrandInfo from "../components/Brand/BrandInfo";
import BrandHeader from "../components/Brand/BrandHeader";
import PhotoCards from "../components/Photo/PhotoCards";

const BrandScreen = ({ navigation, route }) => { 
  // const { brandId } = route.params; 
  const brand = dummyBrands[0];
  const reviews = sophiaReview;
  // const [brand, setBrand] = useState<BrandWithId | undefined>(undefined);

  const addPhoto = (photo: string) => {

  }

  return (
    <ScrollView style={styles.container}>
      <BrandHeader brand={brand} reviews={reviews} />
      <BrandInfo brand={brand}/>
      <PhotoCards photos={brand.photos} addPhoto={addPhoto}/>
    </ScrollView>
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
});

export default BrandScreen;
