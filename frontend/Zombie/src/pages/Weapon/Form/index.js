import React, { useState, useEffect } from 'react';
import {Keyboard} from 'react-native';
import { AttackText, AttackSlider } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, SubmitButton, SubmitText, TitleText, TextError, Header, IconRight } from '../../../components/Form/styles';
import api from '../../../services/api';

export default function WeaponForm({ navigation }){

  const  id  = navigation?.state?.params?.id
  const [attack, setAttack] = useState(0);
  const [name, setName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

  let save = async (id) => {
    let response;
		try {
      if(attack === '' || name === '') {
        setErrorMessage('Preencha todos os campos');
        return;
      }

      if(id) {
       response = await api.put(`/weapons/${id}`, {
          attack,
          name
          });
      } else {
        response = await api.post('/weapons', {
          attack,
          name
          });
      }

      load(id);
      setAttack(0);
      setName('');
      Keyboard.dismiss();

			setErrorMessage(null);

		} catch(response) {
			alert('Erro no cadastro!')
			setErrorMessage(response);
		}
  }
  
  let load = async (id) => {
    if(id) {
      const response = await api.get(`/weapons/${id}`)
      setName(response.data.name);
      setAttack(response.data.attack);
    }

  }

  useEffect( () => { load(id) },[id]);

  return(
    <Container>

      <Header>
        <IconRight
          onPress={() => navigation.navigate('WeaponList')}
        >
          <Icon name='navigate-before' size={30} color='white' />
        </IconRight>
        <TitleText>
          Cadastrar Arma
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

      <TextError> { errorMessage  } </TextError> 

      <SubmitButton onPress={ () => save(id) }>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

    </Container>
  )
}
