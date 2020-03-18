import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { Container, Registros, Title, IconRight, List } from './styles';
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

      <Registros>
        <Title>Lista de Armaduras</Title>

        <IconRight 
        style={{ backgroundColor: 'white', borderRadius: 15, alignItems: 'center', width: 30 }}
        onPress={ () => navigation.navigate('ArmorForm') }
        >
          <Icon name='add' size={25} color='#666'/>
        </IconRight>
      </Registros>

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

ArmorList.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};
