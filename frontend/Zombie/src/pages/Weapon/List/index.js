import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WeaponList({ navigation }){

  return(
    <Text>
		WeaponList
	</Text>
  )
}

WeaponList.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};