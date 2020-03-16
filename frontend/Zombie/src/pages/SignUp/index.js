import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Background, Container, Logo, AreaInput, Input,
         SubmitButton, SubmitText, SignUpText, SignInButton, SignInText} from './styles';

export default function SignUp({ navigation }){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

        <SubmitButton onPress={()=>{}}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={()=> navigation.navigate('SignIn') }>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInButton>

      </Container>
    </Background>
  )
} 