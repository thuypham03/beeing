import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Linking } from "react-native";
import {BrandWithId} from "../../../common/db-types"
import {dummyBrands, sophiaReview} from "../dummy/brands"
import BrandInfo from "../components/Brand/BrandInfo";
import BrandHeader from "../components/Brand/BrandHeader";

const BrandScreen = ({ navigation, route }) => { 
  // const { brandId } = route.params; 
  const brand = dummyBrands[0];
  const reviews = sophiaReview;
  // const [brand, setBrand] = useState<BrandWithId | undefined>(undefined);

  return (
    <View style={styles.container}>
      <BrandHeader brand={brand} reviews={reviews} />
      <BrandInfo brand={brand}/>
    </View>
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
