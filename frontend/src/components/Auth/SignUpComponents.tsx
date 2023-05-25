import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';

type HeaderProps = {
  description: string
};
const Header = ({ description }: HeaderProps) => (
  <Text style={styles.header}>{description}</Text>
);
const SubHeader = ({ description }: HeaderProps) => (
  <Text style={styles.subHeader}>{description}</Text>
);

type ButtonProps = {
  values: string[],
  curState: string,
  setStateFunc: React.Dispatch<React.SetStateAction<string>>,
};
const CategoryButton = ({ values, curState, setStateFunc }: ButtonProps) => {
  const renderItem = (item: string) => {
    const backgroundColor = item === curState ? 'black' : 'white';
    const textColor = item === curState ? '#FCE330' : 'black';
    const textWeight = item === curState ? '700' : '400';

    return (
      <TouchableOpacity onPress={() => setStateFunc(item)} style={[styles.button, {backgroundColor}]}>
        <Text style={[styles.buttonText, {color: textColor, fontWeight: textWeight}]}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      {values.map((item) => renderItem(item))}
    </SafeAreaView>
  );
};

type ContinueButtonProps = {
  onPress: () => void,
  buttonColor?: string,
  textColor?: string,
};
const ContinueButton = ({ onPress, buttonColor, textColor }: ContinueButtonProps) => (
  buttonColor === undefined ? (
    <TouchableOpacity style={styles.continueButton} onPress={onPress}>
      <Text style={styles.continueButtonText}>Continue</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={{...styles.continueButton, backgroundColor: buttonColor}} onPress={onPress}>
      <Text style={{...styles.continueButtonText, color: textColor}}>Continue</Text>
    </TouchableOpacity>
  )
)

type FormInputProps = {
  name: string,
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  secure: boolean,
};
const FormInput = ({ name, state, setState, secure }: FormInputProps) => (
  <TextInput
    style={styles.formInput}
    placeholder={name}
    value={state}
    onChangeText={(state) => setState(state)}
    autoCapitalize="none"
    secureTextEntry={secure}
  />
)

const styles = StyleSheet.create({
  header: {
    padding: 10,
    fontFamily: 'rimouski',
    fontSize: 28,
    alignSelf: 'center',
  },
  subHeader: {
    fontFamily: 'karla',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 10,
    paddingHorizontal: 40,
    textAlign: 'center'
  },
  button: {
    width: 365,
    height: 50,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  continueButton: {
    marginTop: '10%',
    width: 150,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#FCE330',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  continueButtonText: {
    fontFamily: 'rimouski',
    fontSize: 20,
  },
  formInput: {
    marginBottom: 10,
    width: 365,
    height: 45,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
    textAlign: 'left',  
    alignSelf: 'center',
    fontSize: 15,
    marginVertical: 10,
  },
});

export { Header, SubHeader, CategoryButton, ContinueButton, FormInput }