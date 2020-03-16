import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, SignUpLink, SignUpText} from './styles';

export default function SignIn({ navigation }){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Background>
			<Container>
				<Logo source={ require('../../assets/logo.png') }/>

				<AreaInput>
					<Input
						placeholder="Email"
						autoCorrect={false}
						autoCapitalize='none'
						value={email}
						onChangeText={(email)=> setEmail(email)}
					/>
				</AreaInput>

				<AreaInput>
					<Input
						placeholder="Password"
						autoCorrect={false}
						autoCapitalize='none'
						secureTextEntry={true}
						value={password}
						onChangeText={(password)=> setPassword(password)}
					/>
				</AreaInput>

				<SubmitButton onPress={()=>{}}>
					<SubmitText>
						Acessar
					</SubmitText>
				</SubmitButton>

				<SignUpLink onPress={()=> navigation.navigate('SignUp') }>
					<SignUpText>
						Criar conta grátis
					</SignUpText>
				</SignUpLink>
			</Container>
		</Background>
	);
}