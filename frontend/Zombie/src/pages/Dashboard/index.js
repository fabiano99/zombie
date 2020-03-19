import React, { useState } from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Link, AreaLink, AreaLogout,ButtonLogout } from './styles';
import { Title } from '../../components/List/styles';

export default function Dashboard({ navigation }){

  async function logOut() {
    await AsyncStorage.removeItem('@ZombieApi:token');
    navigation.navigate({ routeName: 'SignIn' });
  }

  return(
    <Container>
      <AreaLink>

        <Link onPress={ () => navigation.navigate("ZombieList") } style={{ alignItems: 'center', justifyContent: 'center' }}  >
          <Title>Zombies</Title>
        </Link>

        <Link onPress={ () => navigation.navigate("WeaponList")} >
          <Title>Armas</Title>
        </Link>

        <Link onPress={ () => navigation.navigate("ArmorList")} >
          <Title>Armaduras</Title>
        </Link>
          
      </AreaLink>

      <AreaLogout> 
        <ButtonLogout onPress={ () => logOut() } >
          <Icon name='input' color='white' size={30}>
          </Icon>
          <Title>SAIR</Title>
        </ButtonLogout>

      </AreaLogout>

    </Container>
  )
}
