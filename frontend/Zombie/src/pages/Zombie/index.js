import React, { useState } from 'react';
import {Keyboard, Picker, Text, FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Input, PickerItem, SubmitButton, SubmitText, ViewEquipment,TitleText, Label } from './styles';

function Item({ title }) {
  return (
    <View >
      <Text>{title}</Text>
    </View>
  );
}

export default function Zombie(){

  let armas = [
    {id: 1, name: 'Manchete', attack: 15},
    {id: 2, name: 'Gun', attack: 33},
    {id: 3, name: 'Shotgun', attack: 45},
    {id: 4, name: 'Riffle', attack: 70}
  ]

  let armaduras = [
    {id: 1, name: 'Vest lvl 1', defense: 15},
    {id: 2, name: 'Vest lvl 2', defense: 33},
    {id: 3, name: 'Shield', defense: 45},
    {id: 4, name: 'Helmet', defense: 70}
  ]

  const [weapon, setWeapon] = useState({});
  const [armor, setArmor] = useState([]);
  const [name, setName] = useState('');
  return(
    
    <Container>

      <TitleText>
        Cadastrar Zombie
      </TitleText>

      <Input
        placeholder="Nome"
        keyboardType="default"
        value={name}
        onChangeText={(name) => setName(name)}
        returnKeyType="next"
        onSubmitEditing={() => Keyboard.dismiss()}
      />

      <Label>
        <Text style={{ marginBottom: -15, color: 'white', textAlign: 'left' }}>
          Armas
        </Text>
      </Label>

      <PickerItem
        selectedValue={weapon} 
        onValueChange={ (itemValue, itemIndex)=> setWeapon(itemValue) }
      >
        { armas.map((value, index) => {
          return( <Picker.Item label={value.name} value={value.id} /> )
        }) }
        
      </PickerItem>

      <Label>
        <Text style={{ marginBottom: -15, color: 'white', textAlign: 'left' }}>
          Armaduras
        </Text>
      </Label>

      <PickerItem
        selectedValue={armor} 
        onValueChange={ (itemValue, itemIndex)=> setArmor(itemValue) }
      >
        { armaduras.map((value, index) => {
          return( <Picker.Item label={value.name} value={value.id} /> )
        }) }
        
      </PickerItem>

      <Label>
        <Text style={{  color: 'white', textAlign: 'left' }}>
          Equipamentos
        </Text>
      </Label>
      <ViewEquipment>
        <FlatList 
          data={armaduras}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={item => item.id}
        />


        <FlatList 
          data={armas}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={item => item.id}
        />
      </ViewEquipment>




      <SubmitButton onPress={ ()=> {} }>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

    </Container>
  )
}

Zombie.navigationOptions = {
  tabBarLabel: 'Zombie',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={24} color={tintColor} />
  )
};