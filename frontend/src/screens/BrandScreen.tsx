import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import {BrandWithId} from "../../../common/db-types"
import {dummyBrands, sophiaReview} from "../dummy/brands"
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import { averageRatings } from "../utils/averageRatings";
import CustomIcon from '../utils/customIcons'

const BrandScreen = ({ navigation, route }) => { 
  // const { brandId } = route.params; 
  const brand = dummyBrands[0];
  const reviews = sophiaReview;
  // const [brand, setBrand] = useState<BrandWithId | undefined>(undefined);

  // useEffect(() => {
  //   setBrand(dummyBrands[0]);
  // }, []);

  const brandHeader = (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        {brand.avatar ? 
          <Image
            source={{uri: brand.avatar}}
            style={styles.image}
          />  : 
          <Image
            source={require('../assets/avatar-placeholder.png')}
            style={styles.image}
          />
        }
      </View>

      <Text style={styles.brandName}>
          {brand.name}
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name="star" size={32} style={{color: '#FFC900'}}/>
        <Text style={styles.averageRatingText}>
          {averageRatings(reviews)}/5 ({reviews.length} ratings)
        </Text>
      </View>
      

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '2%' }}>
        <TouchableOpacity style={{
          ...styles.headerButton,
          backgroundColor: 'black',
          marginRight: 8,
        }}>
          <CustomIcon name='hive' size={25} style={{color: 'yellow', marginRight: 8}} />
          <Text style={{
            ...styles.headerButtonText,
            color: '#FCE330'
          }}>
            Manage Hive
          </Text>
        </TouchableOpacity>  

        <TouchableOpacity style={{
          ...styles.headerButton,
          backgroundColor: '#FCE330',
        }}>
          <FontAwesome name="camera" size={25} style={{color: 'black', marginRight: 8}}/>
          <Text style={{
            ...styles.headerButtonText,
            color: 'black'
          }}>
            Edit Profile
          </Text>
        </TouchableOpacity>  
      </View>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      {brandHeader}
    </ScrollView>
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center', 
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100, 
    overflow: 'hidden', 
    marginTop: '5%',
    marginBottom: '2%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  brandName: {
    fontFamily: 'rimouski',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 26,
  },
  averageRatingText: {
    marginLeft: 5,
    fontFamily: 'karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
  },
  headerButton: {
    padding: 10,
    borderRadius: 40,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  headerButtonText: {
    fontFamily: 'rimouski',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
  }
});

export default BrandScreen;
