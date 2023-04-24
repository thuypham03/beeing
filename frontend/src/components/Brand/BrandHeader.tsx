import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BrandWithId, ReviewWithId } from "../../../../common/db-types"
import { FontAwesome } from '@expo/vector-icons';
import { averageRatings } from "../../utils/averageRatings";
import CustomIcon from '../../utils/customIcons'

type Props = {
  brand: BrandWithId;
  reviews: ReviewWithId[];
}

const BrandHeader = ({brand, reviews}: Props) => {
  const isOwner = true;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        {brand.avatar ? 
          <Image
            source={{uri: brand.avatar}}
            style={styles.image}
          />  : 
          <Image
            source={require('../../assets/avatar-placeholder.png')}
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
}

const styles = StyleSheet.create({
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
});

export default BrandHeader;