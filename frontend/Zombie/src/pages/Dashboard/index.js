import React, { useState } from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, AreaSaldo, SaldoTitle, Saldo, Registros, Title, IconRight, List } from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function Dashboard({ navigation }){

  async function logOut() {
    await AsyncStorage.removeItem('@ZombieApi:token');
    navigation.navigate({ routeName: 'SignIn' });
  }
  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([
    {key: 1, saldo: 300, tipo: 'despesa'},
    {key: 3, saldo: 50, tipo: 'despesa'},
    {key: 15, saldo: 600, tipo: 'receita'},
  ]);

  return(
    <Container>
      <AreaSaldo>
        <SaldoTitle>Saldo Atual</SaldoTitle>
        <Saldo>R$ 123.00</Saldo>
      </AreaSaldo>

      <Registros>
        <Title>Registros do dia</Title>
        <IconRight>
          <Icon name="chevron-right" size={30} color="#FFF" />
        </IconRight>
      </Registros>

      <List
        keyExtractor={item => item.key}
        data={historico}
        renderItem={ ({item}) => <HistoricoList data={item} /> }
      />

    </Container>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={24} color={tintColor} />
  )
};