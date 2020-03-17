import React, { useState } from 'react';
import {Keyboard, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, DefenseText, SubmitButton, SubmitText, DefenseSlider,TitleText, TextError } from './styles';
import api from '../../services/api';

export default function Armor({ navigation }){
  const [defense, setDefense] = useState(0);
  const [name, setName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

  save = async () => {
		try {
			const response = await api.post('/armors', {
      defense,
      name
      });

      setDefense(0);
      setName('');
      Keyboard.dismiss();

			// navigation.navigate({ routeName: 'Preload' });
			setErrorMessage(null);

		} catch(response) {
			alert('Erro no cadastro!')
			setErrorMessage(response);
		}
	}

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

      <TextError> { errorMessage  } </TextError> 

      <SubmitButton onPress={ save }>
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
