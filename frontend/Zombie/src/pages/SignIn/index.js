import React, { useState } from 'react';
import { View, Text, AsyncStorage, Alert } from 'react-native';
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, SignUpLink, SignUpText, TextError} from './styles';
import api from '../../services/api';
import { color } from 'react-native-reanimated';

export default function SignIn({ navigation }){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	handleSubmit = async () => {
		try {
			const response = await api.post('/authenticate', {
				email: email,
				password: password
			});
	
			const { token } = response.data;

			await AsyncStorage.multiSet([
				['@ZombieApi:token', token]
			]);

			navigation.navigate({ routeName: 'Preload' });
			setErrorMessage(null);

		} catch(response) {
			Alert.alert('Erro no Login!')
			setErrorMessage(response.data[0]['message']);
		}
	}

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
				
				<TextError> { errorMessage  } </TextError> 

				<SubmitButton onPress={ handleSubmit }>
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