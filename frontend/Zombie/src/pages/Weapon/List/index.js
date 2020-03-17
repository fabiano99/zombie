import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { Container, Registros, Title, IconRight, List } from './styles';
import ListItem from '../../../components/ListItem';
import api from '../../../services/api';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function WeaponList({ navigation }){


  const [weapons, setWeapons] = useState([]);
  
  async function list() {
    let tmpList = await api.get('/weapons');
    setWeapons(tmpList.data);

    console.log(weapons);
  }


  useEffect(() => {
    list();
  }, [])


  return(
    <Container>

      <Registros>
        <Title>Lista de Armas</Title>

        <IconRight 
        style={{ backgroundColor: 'white', borderRadius: 15, alignItems: 'center', width: 30 }}
        onPress={ () => navigation.navigate('WeaponForm') }
        >
          <Icon name='add' size={25} color='#666'/>
        </IconRight>
      </Registros>

      <List
        keyExtractor={item => item.key}
        data={weapons}
        renderItem={ ({item}) => <ListItem navigation={navigation} data={item} route={'weapons'} edit={'WeaponForm'} /> }
      />
  </Container>
  )
}

WeaponList.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};