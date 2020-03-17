import React, { useState } from 'react';
import {Keyboard, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, DefenseText, SubmitButton, SubmitText, DefenseSlider,TitleText } from './styles';

export default function Armor(){
  const [defense, setDefense] = useState(0);
  const [name, setName] = useState('');

  return(
    <Container>

      <TitleText>
        Cadastrar Armadura
      </TitleText>

      <Input
        placeholder="Nome"
        keyboardType="default"
        value={name}
        onChangeText={(name) => setName(name)}
        returnKeyType="next"
        onSubmitEditing={() => Keyboard.dismiss()}
      />

      <DefenseText>
        Poder de Defesa: {defense.toFixed()}
      </DefenseText>

      <DefenseSlider
        thumbTintColor='#525356'
        maximumTrackTintColor='#EF230C'
        minimumTrackTintColor='#A60E09'
        minimumValue={0}
        maximumValue={100}
        value={ defense }
        onValueChange={value => setDefense(value) }
      />



      {/* <PickerItem
        selectedValue={tipo} 
        onValueChange={ (itemValue, itemIndex)=> setTipo(itemValue) }
      >
         <Picker.Item label="Receita" value="receita" /> 
         <Picker.Item label="Despesa" value="despesa" /> 
      </PickerItem> */}


      <SubmitButton onPress={ ()=> {} }>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

    </Container>
  )
}

Armor.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};
