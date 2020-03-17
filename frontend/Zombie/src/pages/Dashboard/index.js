import React from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Dashboard({ navigation }){

  async function logOut() {
    await AsyncStorage.removeItem('@ZombieApi:token');
    navigation.navigate({ routeName: 'SignIn' });
  }
  return(
    <View>
      <Text>PAINEL!</Text>
      <TouchableOpacity onPress={ logOut }>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={24} color={tintColor} />
  )
};