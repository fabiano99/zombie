import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { Container, Header, Title, IconRight, List } from '../../../components/List/styles';
import ListItem from '../../../components/ListItem';
import api from '../../../services/api';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function ArmorList({ navigation }){

  const [armors, setArmors] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  async function list() {
    setRefreshing(true)
    setArmors([]);
    let tmpList = await api.get('/armors');
    setArmors(tmpList.data);
    setRefreshing(false)
  }

  function refresh() {
    list();
  }
  refresh = refresh.bind(this);

  useEffect(  () => {
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
        
        <Title>Lista de Armaduras</Title>

        <IconRight 
        style={{ backgroundColor: 'white', borderRadius: 15, alignItems: 'center', width: 30 }}
        onPress={ () => navigation.navigate('ArmorForm') }
        >
          <Icon name='add' size={25} color='#666'/>
        </IconRight>
      </Header>

      <List
        keyExtractor={item => item.key}
        data={armors}
        renderItem={ ({item}) => <ListItem navigation={navigation} refresh={refresh} data={item} route={'armors'} edit={'ArmorForm'} /> }
        refreshing={refreshing}
        extraData={armors}
        onRefresh={ ()=>refresh() }
      
      />



  </Container>
  )
}

