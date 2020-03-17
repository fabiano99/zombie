import React, { useState } from 'react';
import { Platform, Alert, AsyncStorage } from 'react-native';

import { Background, Container, Logo, AreaInput, Input,
		 SubmitButton, SubmitText, SignUpText, SignInButton, SignInText, TextError} from './styles';
import { env } from '../../services/connection';
import api from '../../services/api';
		 



export default function SignUp({ navigation }){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit() {
    if(nome === '' || email === '' || password === '') {
      setErrorMessage('Preencha todos os campos');
      return;
    }
    try {
			const response = await api.post('/register', {
				email: email,
        password: password,
        username: nome
			});
	
			const { token } = response.data;
	
			await AsyncStorage.multiSet([
				['@CodeApi: token', token]
			]);

			Alert.alert('Usuário Cadastrado!');
			setErrorMessage(null);

		} catch(response) {
      Alert.alert('Erro no Cadastro!');
			setErrorMessage('Erro no Cadastro!');
		}
       
  }

  function singOut() {

  }

  singOut();

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <SignUpText>Cadastro</SignUpText>

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(nome)=> setNome(nome)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(email)=> setEmail(email)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(password)=> setPassword(password)}
          />
        </AreaInput>

        <TextError> { errorMessage  } </TextError> 

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={()=> navigation.navigate('SignIn') }>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInButton>

      </Container>
    </Background>
  )
} 