import React, { useState } from 'react';
import {Keyboard, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, AttackText, SubmitButton, SubmitText, AttackSlider,TitleText } from './styles';

export default function Weapon(){
  const [attack, setAttack] = useState(0);
  const [name, setName] = useState('');

  return(
    <Container>

      <TitleText>
        Cadastrar Arma
      </TitleText>

      <Input
        placeholder="Nome"
        keyboardType="default"
        value={name}
        onChangeText={(name) => setName(name)}
        returnKeyType="next"
        onSubmitEditing={() => Keyboard.dismiss()}
      />


      <AttackText>
        Poder de Ataque: {attack.toFixed()}
      </AttackText>

      <AttackSlider
        thumbTintColor='#525356'
        maximumTrackTintColor='#EF230C'
        minimumTrackTintColor='#A60E09'
        minimumValue={0}
        maximumValue={100}
        value={ attack }
        onValueChange={value => setAttack(value) }
      />

      <SubmitButton onPress={ ()=> {} }>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

    </Container>
  )
}

Weapon.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};
