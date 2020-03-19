import React, { useState, useEffect } from 'react';
import {Keyboard, Text} from 'react-native';
import { DefenseText, DefenseSlider } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, SubmitButton, SubmitText, TitleText, TextError, Header, IconRight } from '../../../components/Form/styles';
import api from '../../../services/api';

export default function ArmorForm({ navigation }){

  let  id  = navigation?.state?.params?.id
  const [defense, setDefense] = useState(0);
  const [name, setName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

  let save = async (id) => {
    let response;
		try {
      if(defense === '' || name === '') {
        setErrorMessage('Preencha todos os campos');
        return;
      }

      if(id) {
       response = await api.put(`/armors/${id}`, {
          defense,
          name
          });
      } else {
        response = await api.post('/armors', {
          defense,
          name
          });
      }

      load(id);
      setDefense(0);
      setName('');
      Keyboard.dismiss();

			setErrorMessage(null);

		} catch(response) {
			alert('Erro no cadastro!');
			setErrorMessage(response);
		}
  }
  
  let load = async (id) => {
    if(id) {
      const response = await api.get(`/armors/${id}`);
      setName(response.data.name);
      setDefense(response.data.defense);
    }
  }

  useEffect( () => { load(id) }, [id]);

  return(
    <Container>

      <Header>
        <IconRight
          onPress={() => navigation.navigate('WeaponList')}
        >
          <Icon name='navigate-before' size={30} color='white' />
        </IconRight>
        <TitleText>
          Cadastrar Armadura
        </TitleText>
      </Header>

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

      <SubmitButton onPress={ () => save(id) }>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

    </Container>
  )
}