import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { ItemText, ItemSubText, Record, Action, Container, IconActions } from './styles';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import WeaponList from '../../pages/Weapon/List';

export default function ListItem({ data, route, edit, navigation, refresh }){

  async function remove(id, route) {
    try{
      await api.delete(`/${route}/${id}`);
      refresh();
    } catch(error) {
      console.log(error)
      alert('Erro ao remover');
    }

  }

  useEffect(() => {
    console.log("NAVIGATION => \n", navigation)
  },[])

  return (
    <Container>

      <Record >
        <ItemText>{data.name}</ItemText>

        <Action >
          <IconActions onPress={ () => navigation.navigate(edit, {id: data.id}) } >
            <Icon name="edit" size={30} color="#666" />
          </IconActions>

          <IconActions onPress={ () => remove(data.id, route) }>
            <Icon name="delete" size={30} color="#666" />
          </IconActions>
        </Action>
      </Record>

    </Container>
  );
}