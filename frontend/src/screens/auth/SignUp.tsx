import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { Header, SubHeader, CategoryButton, ContinueButton, FormInput } from '../../components/Auth/SignUpComponents'
import { registration, uploadImage } from '../../utils/firebase';
import { pickImage } from '../../utils/selectPhoto';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  image: {
    width: 250, 
    height: 250,
    borderRadius: 250,
    margin: 10,
    marginLeft: -1,
  },
});

const SignUp = ({ navigation }) => {
  const [stage, setStage] = useState<string>('Choose User Type');
  const [userType, setUserType] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const nextPage = async () => {
    // Create User context 
    const newUser = {
      id: userId,
      type: userType.toUpperCase(),
      email: email,
      avatar: uploadedAvatar
    };
    await axios.post('/new-user', newUser);
    userType === 'Brand' ? navigation.navigate('Brand Sign Up') : navigation.navigate('Influencer Sign Up');
  }

  const chooseUserType = () => {
    const toWelcome = () => {
      userType ? setStage('Welcome') : Alert.alert('User type is required.');
    };
    return (
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <Header description='Let the journey begin' />
        <SubHeader description='Are you a brand or an influencer?' />
        <CategoryButton values={['Brand', 'Influencer']} curState={userType} setStateFunc={setUserType}/>
        <ContinueButton onPress={toWelcome}/>
      </View>
    )
  }

  const welcome = () => {
    const toMiddle = () => {
      if (email === '' || password === '' || confirmPassword === '') Alert.alert('Please fill out the form.')
      else if (password !== confirmPassword) Alert.alert('Password does not match.')
      else {
        registration(email, password).then((uid) => {
          if (uid !== null) { setStage('Middle'); setUserId(uid); }
        })
      }
    } 
    return(
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <Header description='Welcome to beeing' />
        <SubHeader description='Start creating Brand Value today by partnering with our tight-knit community, one Beefluencer at a time' />
        <FormInput name='Email' state={email} setState={setEmail} secure={false}/>
        {userType === 'Influencer' ? 
          <Text style={{fontFamily: 'karla', fontSize: 12, paddingHorizontal: 50}}>
            If you are a student, use your .edu email address for exclusive deals and perks around your campus
          </Text>
        : <></>}
        <FormInput name='Password' state={password} setState={setPassword} secure={true}/>
        <FormInput name='Confirm Password' state={confirmPassword} setState={setConfirmPassword} secure={true}/>
        <ContinueButton onPress={toMiddle}/>
      </View>    
    )
  }

  const middle = () => {
    const subHeader = 
      userType === 'Influencer' ? 'Filling out the details enables you to match with your best fit brands'
      : 'Filling out the details enables you to attract the best fit beefluencers';

    const backgroundImageBrand = require('../../assets/background-image-brand.png');
    const backgroundImageInfluencer = require('../../assets/background-image-influencer.png');
    const image = userType === 'Brand' ? backgroundImageBrand : backgroundImageInfluencer;

    return (
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
      >
        <View style={{marginTop: '20%', alignItems: 'center'}}>
          <Header description="Let's Build Your Profile" />
          <SubHeader description={subHeader}/>
          <View style={{marginTop: '90%'}}>
            <ContinueButton onPress={() => setStage('Choose Profile')} buttonColor='black' textColor='white'/>
          </View>
        </View>
      </ImageBackground>
    )
  }

  const chooseProfile = () => {
    const subHeader = 
      userType === 'Influencer' ? 'Please add a photo that bests represent you' 
      : 'Please add a photo of brand';
    
    const uploadAvatar = () => {
      if (avatar === null) Alert.alert('Please select profile picture.')
      else {
        uploadImage(avatar)
          .then((res) => {
            setUploadedAvatar(res);
            nextPage();
          })
          .catch((err) => {
            console.log("Error in uploading image to storage", err);
          })
      }
    }

    return (
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <Header description='Profile Picture' />
        <SubHeader description={subHeader}/>

        <View style={{flexDirection: 'row'}}>
          {!avatar ? 
            <Image
              source={require('../../assets/avatar-placeholder-setting.png')}
              style={styles.image}
            />  : 
            <Image
              source={{ uri: avatar }}
              style={styles.image}
            />
          }
          <TouchableOpacity style={{
            marginTop: 210,
            marginLeft: -70,
            padding: 10,
            borderRadius: 30,
            borderWidth: 1,
            backgroundColor: 'white',
          }} onPress={() => pickImage(setAvatar)}>
            <Entypo name="camera" size={40} style={{color: 'black'}}/>
          </TouchableOpacity>  
        </View>
        
        <ContinueButton onPress={uploadAvatar} />
        <TouchableOpacity onPress={nextPage}>
          <Text style={{fontFamily: 'karla', fontSize: 15, marginTop: 10}}>Maybe Later</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        stage === 'Choose User Type' ? chooseUserType () : 
        stage === 'Welcome' ? welcome () : 
        stage === 'Middle' ? middle () : chooseProfile ()
      }
    </View>
  );
}

export default SignUp;


