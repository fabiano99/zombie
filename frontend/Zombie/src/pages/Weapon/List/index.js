import React, { useState, useEffect } from 'react';
import { Text, Button, View, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { Container, Registros, Title, IconRight, List } from './styles';
import ListItem from '../../../components/ListItem';
import api from '../../../services/api';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function WeaponList({ navigation }){

  const [weapons, setWeapons] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function list() {
    setRefreshing(true)
    setWeapons([]);
    let tmpList = await api.get('/weapons');
    setWeapons(tmpList.data);
    setRefreshing(false)
  }

  function refresh() {
    list();
  }
  refresh = refresh.bind(this);

  useEffect( () => {
    list();
  }, [])


  return(
    <Container>

      <Registros>
        <Title>Lista de Armas ({ weapons.length }) </Title>

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
        renderItem={ 
          ({item}) => <ListItem navigation={navigation} refresh={refresh} data={item} route={'weapons'} edit={'WeaponForm'} /> 
        }
          refreshing={refreshing}
          extraData={weapons}
          onRefresh={ ()=>refresh() }
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