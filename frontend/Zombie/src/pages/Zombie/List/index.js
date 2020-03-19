import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { Container, Header, Title, IconRight, List } from '../../../components/List/styles';
import ListItem from '../../../components/ListItem';
import api from '../../../services/api';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

export default function ZombieList({ navigation }){

  const [zombies, setZombies] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  async function list() {
    setRefreshing(true)
    setZombies([]);
    let tmpList = await api.get('/zombies');
    setZombies(tmpList.data);
    setRefreshing(false)
  }

  function refresh() {
    list();
  }
  refresh = refresh.bind(this);


  useEffect(() => {
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
        
        <Title>Lista de Zombies</Title>

        <IconRight 
        style={{ backgroundColor: 'white', borderRadius: 15, alignItems: 'center', width: 30 }}
        onPress={ () => navigation.navigate('ZombieForm') }
        >
          <Icon name='add' size={25} color='#666'/>
        </IconRight>
      </Header>

      <List
        keyExtractor={item => item.key}
        data={zombies}
        renderItem={ ({item}) => <ListItem navigation={navigation} refresh={refresh} data={item} route={'zombies'} edit={'ZombieForm'} /> }
        refreshing={refreshing}
        extraData={zombies}
        onRefresh={ ()=>refresh() }
      />
  </Container>
  )
}
