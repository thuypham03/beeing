import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import { UserContext } from '../../utils/userContext';
import { CategoryButton, ContinueButton, FormInput, Header, SocialInput, SubHeader } from '../../components/Auth/SignUpComponents';
import api from '../../utils/axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'karla',
    fontSize: 15,
    marginLeft: '10%',
    marginBottom: -5
  },
  descriptionForm: {
    marginBottom: 10,
    width: 365,
    height: 80,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    textAlign: 'left',  
    alignSelf: 'center',
    fontSize: 15,
    marginVertical: 10,
    paddingTop: 10,
  }
});

const BrandSignUp = () => {
  const { user, setUser } = useContext(UserContext);

  const [stage, setStage] = useState<string>('Introduce');
  const [brandName, setBrandName] = useState<string | null>(null);
  const [sector, setSector] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [salesChannel, setSalesChannel] = useState<string | null>(null);

  const [facebook, setFacebook] = useState<string | null>(null);
  const [instagram, setInstagram] = useState<string | null>(null);
  const [youtube, setYoutube] = useState<string | null>(null);
  const [tiktok, setTiktok] = useState<string | null>(null);
  const [twitch, setTwitch] = useState<string | null>(null);
  const [twitter, setTwitter] = useState<string | null>(null);

  const finishSignUp = async () => {
    const newUser = {
      id : user.id,
      type: 'BRAND', 

      // Basic Info
      avatar: user.avatar,
      address: null,
      phone: phone,
      email: user.email,
      website: website,
      photos: [],

      // Social Media
      socialMedia: {
        facebook: facebook,
        instagram: instagram,
        youtube: youtube,
        tiktok: tiktok,
        twitch: twitch,
        twitter: twitter,
      },

      // Brand
      name: brandName,
      sector: sector,
      description: description,
      channel: salesChannel.toUpperCase()
    }

    setUser(newUser);
    await api.post('/new-user', newUser);
  }

  const introduce = () => {
    const nextPage = () => {
      if (!brandName || !sector) Alert.alert('Brand name and sector fields are required.')
      else setStage('Sales');
    };

    return (
      <View style={{marginTop: '20%'}}>
        <Header description='Introduce yourself' />
        <SubHeader description='So that the Beeing community knows a little more about your brand' />

        <Text style={styles.text}>Brand Name</Text>
        <FormInput name='Enter your band name' state={brandName} setState={setBrandName} secure={false} />
        <Text style={styles.text}>Which best describes your sector?</Text>
        <FormInput name='Enter your sector' state={sector} setState={setSector} secure={false} />
        <Text style={styles.text}>Website (optional)</Text>
        <FormInput name='Enter website URL' state={website} setState={setWebsite} secure={false} />
        <Text style={styles.text}>Phone number (optional)</Text>
        <FormInput name='Enter your phone number' state={phone} setState={setPhone} secure={false} />
        <Text style={styles.text}>Brand description (optional)</Text>
        <TextInput
          style={styles.descriptionForm}
          placeholder='Enter your brand description'
          value={description}
          onChangeText={(state) => setDescription(state)}
          autoCapitalize="none"
          multiline={true}
        />
        <Text style={{...styles.text, fontSize: 13, marginTop: -5}}>Try to be as concise and to the point as possible</Text>
        <ContinueButton onPress={nextPage}/>
      </View>
    );
  }

  const sales = () => {
    const nextPage = () => {
      if (!salesChannel) Alert.alert('Sales channel is required.')
      else setStage('Address');
    };

    return (
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <Header description='Sales Channel' />
        <SubHeader description='Which best describes the sales channel of your business?' />
        <CategoryButton values={['Online', 'In-person', 'Both']} curState={salesChannel} setStateFunc={setSalesChannel}/>
        <ContinueButton onPress={nextPage}/>
      </View>
    );
  }

  const socialMedia = () => {
    return (
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <Header description='Social Media Presence'/>
        <SubHeader description='Please add the links to your media platforms. Add all that apply.' />

        <SocialInput type='facebook' state={facebook} setState={setFacebook} />
        <SocialInput type='instagram' state={instagram} setState={setInstagram} />
        <SocialInput type='youtube' state={youtube} setState={setYoutube} />
        <SocialInput type='tiktok' state={tiktok} setState={setTiktok} />
        <SocialInput type='twitch' state={twitch} setState={setTwitch} />
        <SocialInput type='twitter' state={twitter} setState={setTwitter} />

        <ContinueButton onPress={finishSignUp} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        stage === 'Introduce' ? introduce () : 
        stage === 'Sales' ? sales () : socialMedia ()
      }
    </View>
  )
};

export default BrandSignUp;