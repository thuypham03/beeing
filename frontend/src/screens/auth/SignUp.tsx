import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text, ImageBackground} from 'react-native';
import { Header, SubHeader, CategoryButton, ContinueButton, FormInput } from '../../components/Auth/SignUpComponents'
import { registration } from '../../utils/firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});

const SignUp = ({ navigation }) => {
  const [stage, setStage] = useState<string>('Choose User Type');
  const [userType, setUserType] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const nextPage = () => {
    userType ? (userType === 'Brand' ? navigation.navigate('Brand Sign Up') : navigation.navigate('Influencer Sign Up'))
     : Alert.alert('User type is required.');
  };

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
        // const isValid = registration(email, password);
        const isValid = true;
        if (isValid) setStage('Middle');
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
      userType === 'Brand' ? 'Filling out the details enables you to match with your best fit brands'
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
    return (
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <Header description='Profile Picture' />
        <SubHeader description='Please add a photo that bests represent you'/>
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


