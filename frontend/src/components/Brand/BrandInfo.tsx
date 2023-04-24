import { BrandWithId } from "../../../../common/db-types"
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import CustomIcon from '../../utils/customIcons'

type Props = {
  brand: BrandWithId;
};

const BrandInfo = ({ brand }: Props) => {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error('Failed to open link:', err);
    });
  };

  return (
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
}

const styles = StyleSheet.create({
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

export default BrandInfo;
