import React, { useState, useEffect } from 'react';
import { Container, Header, Title, IconRight, List } from '../../../components/List/styles';

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

      <Header>
        <IconRight 
              onPress={ () => navigation.navigate('Dashboard') }
              >
          <Icon name='navigate-before' size={30} color='white'/>
        </IconRight>
        <Title>Lista de Armas ({ weapons.length }) </Title>

        <IconRight 
        style={{ backgroundColor: 'white', borderRadius: 15, alignItems: 'center', width: 30 }}
        onPress={ () => navigation.navigate('WeaponForm') }
        >
          <Icon name='add' size={25} color='#666'/>
        </IconRight>
      </Header>

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
