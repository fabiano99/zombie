import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Background, Container } from './styles';

export default  function Preload({ navigation }){

	async function loadToken() {
		const token = await AsyncStorage.getItem('@ZombieApi:token')
		if(token){
			navigation.navigate('Dashboard');
		  }else{
			navigation.navigate({ routeName: 'SignIn' });
		  }
	}

  useEffect(() => { loadToken() }, []);

  return(
    <Background>
      <Container>
        <ActivityIndicator color="#8F9075" size={50} />
      </Container>
    </Background>
  )
}