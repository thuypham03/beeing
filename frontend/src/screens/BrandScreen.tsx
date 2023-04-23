import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Linking } from "react-native";
import {BrandWithId} from "../../../common/db-types"
import {dummyBrands, sophiaReview} from "../dummy/brands"
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { averageRatings } from "../utils/averageRatings";
import CustomIcon from '../utils/customIcons'

const BrandScreen = ({ navigation, route }) => { 
  // const { brandId } = route.params; 
  const brand = dummyBrands[0];
  const reviews = sophiaReview;
  const isOwner = true;
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
        <FontAwesome name="star" size={25} style={{color: '#FFC900'}}/>
        <Text style={styles.averageRatingText}>
          {averageRatings(reviews)}/5 ({reviews.length} ratings)
        </Text>
      </View>
      
      {isOwner && 
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
      }
    </View>
  )

  const openUrl = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error('Failed to open link:', err);
    });
  };

  const brandInfo = (
    <View style={{marginTop: 10}}>
      {brand.address && 
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5}}> 
          <CustomIcon name='location' size={25} style={styles.infoIcon} />
          <Text style={styles.infoText}>{brand.address}</Text>
        </View>
      }
      {brand.phone && 
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5}}> 
          <CustomIcon name='phone' size={25} style={styles.infoIcon} />
          <Text style={styles.infoText}>{brand.phone}</Text>
        </View>
      }
      {brand.email && 
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, marginLeft: -3.5}}> 
          <CustomIcon name='email' size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>{brand.email}</Text>
        </View>
      }

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 2}}>
        {brand.website && 
          <TouchableOpacity onPress={() => openUrl(brand.website)}>
            <CustomIcon name="website" size={25} style={{color: 'black', marginRight: 10}}/>
          </TouchableOpacity>  
        }
        {brand.facebook && 
          <TouchableOpacity onPress={() => openUrl(brand.facebook)}>
            <Entypo name="facebook" size={25} style={{color: 'black', marginRight: 10}}/>
          </TouchableOpacity>  
        }
        {brand.instagram && 
          <TouchableOpacity onPress={() => openUrl(brand.instagram)}>
            <Entypo name="instagram" size={25} style={{color: 'black', marginRight: 10}}/>
          </TouchableOpacity>  
        }
        {brand.tiktok && 
          <TouchableOpacity onPress={() => openUrl(brand.tiktok)}>
            <FontAwesome5 name="tiktok" size={22} style={{color: 'black', marginRight: 10}}/>
          </TouchableOpacity>  
        }
        {brand.youtube && 
          <TouchableOpacity onPress={() => openUrl(brand.youtube)}>
            <Entypo name="youtube" size={25} style={{color: 'black', marginRight: 10}}/>
          </TouchableOpacity>  
        }
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {brandHeader}
      {brandInfo}
    </View>
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
  headerContainer: {
    alignItems: 'center', 
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100, 
    overflow: 'hidden', 
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
    fontSize: 22,
  },
  averageRatingText: {
    marginLeft: 5,
    fontFamily: 'karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
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
    fontSize: 14,
  },
  infoIcon: {
    color: 'grey', 
    marginRight: 10,
  },
  infoText: {
    fontFamily: 'karla',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 15,
  }
});

export default BrandScreen;
