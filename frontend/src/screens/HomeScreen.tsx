import { View, Text, Button } from "react-native"; 

const HomeScreen = ({ navigation }) => { 
  return (
    <View>
      <Text>You have (undefined) friends.</Text>

      <Button
        title="Add some brand"
        onPress={() =>
          navigation.navigate('Brand', {name : "Sophia"})
        }
      />
    </View>
  );
};

export default HomeScreen;
