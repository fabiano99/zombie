import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { Container, Registros, Title, IconRight, List } from './styles';
import ListItem from '../../../components/ListItem';
import api from '../../../services/api';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function ArmorList({ navigation }){


  const [armors, setArmors] = useState([]);
  
  async function list() {
    let tmpList = await api.get('/armors');
    setArmors(tmpList.data);

    console.log(armors);
  }


  useEffect(() => {
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
        renderItem={ ({item}) => <ListItem navigation={navigation} data={item} route={'armors'} edit={'ArmorForm'} /> }
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
