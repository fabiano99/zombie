import React, { useState, useEffect } from 'react';
import {Keyboard, Picker, Text, FlatList, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TextError, Input, PickerItem, AreaPicker, AddButton, RemoveButton, SubmitButton, SubmitText, AreaEquipment, ViewEquipment,TitleText, Label } from './styles';
import api from '../../../services/api';

function Item({ title }) {
  return (
    <View >
      <Text>{title}</Text>
    </View>
  );
}

export default function ZombieForm({ navigation }) {

  // control variable
  const [loadedWeapons, setLoadedWeapons] = useState(false);
  const [loadedArmors, setLoadedArmors] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const [weapon, setWeapon] = useState({});
  const [armor, setArmor] = useState({});
  const [name, setName] = useState('');	
  const [errorMessage, setErrorMessage] = useState('');

  const [listWeapons, setListWeapons] = useState([]);
  const [listArmors, setListArmors] = useState([]);

  const [zombieWeapons, setZombiesWeapons] = useState([]);
  const [zombieArmors, setZombiesArmors] = useState([]);

  const  id  = navigation?.state?.params?.id

  let save = async (id) => {
    let response;
		try {
      if(name === '') {
        setErrorMessage('Nome é um campo obrigatório');
        return;
      }
      const prepared = prepareToSave();
      console.log(prepared);
      if(id) {

       response = await api.put(`/zombies/${id}`, {
          name: name,
          weapons: prepared.weapons,
          armors: prepared.armors
          });
      } else {
        response = await api.post('/zombies', {
          name: name,
          weapons: prepared.weapons,
          armors: prepared.armors
          });
      }

      load(id);
      setName('');
      Keyboard.dismiss();

			// navigation.navigate({ routeName: 'Preload' });
			setErrorMessage(null);

		} catch(response) {
			alert('Erro no cadastro!')
			setErrorMessage(response);
		}
  }

  let load = async (id) => {
    const responseArmors = await api.get('/armors');
    const responseWeapons = await api.get('/weapons');

    responseWeapons.data.unshift({id: -1, name: 'Selecione'});
    responseArmors.data.unshift({id: -1, name: 'Selecione'});

    setListArmors(responseArmors.data);
    setListWeapons(responseWeapons.data);

    if(id) {
      const response = await api.get(`/zombies/${id}`);
      setName(response.data.name);
      setZombiesArmors(response.data.armors);
      setZombiesWeapons(response.data.weapons);

      console.log(response.data);
    }

  }

  useEffect( () => { 
      load(id);
    }, [id]
  );

function prepareToSave() {
  const tmpArmors = zombieArmors.map((value) => {
    return value.id
  })

  const tmpWeapons = zombieWeapons.map((value) => {
    return value.id
  })

  return { weapons: tmpWeapons, armors: tmpArmors }
}

  function refresh() {

  }

  function addArmor(value) {
    console.log
    console.log(zombieArmors);
    setRefreshing(true);
    if(value?.id && loadedArmors && value.id > 0) zombieArmors.push(value);
    setRefreshing(false);
    setLoadedArmors(true);
    setArmor({id: -1, name: 'selecione'});
  }

  function addWeapon(value) {
    console.log(zombieWeapons);
    setRefreshing(true);
    if(value?.id && loadedWeapons && value.id > 0 )  zombieWeapons.push(value);
    setRefreshing(false);
    setLoadedWeapons(true);
    setWeapon({id: -1, name: 'selecione'});
  }

  function removeArmors(id) {
    setRefreshing(true)
    if(zombieArmors.length === 1) {
      setZombiesArmors([]);
    } else {
      const filtered =  zombieArmors.filter((value, index, arr) => {
        if(id != value.id) {
          return value;
        }
      });
      setZombiesArmors(filtered)
    }

    setRefreshing(false)
  }

  function removeWeapons(id) {
    setRefreshing(true);
    if(zombieWeapons.length === 1) {
      setZombiesWeapons([]);
    } else {
      const filtered =  zombieWeapons.filter((value, index, arr) => {
        if(id != value.id) {
          return value;
        }
      });
      setZombiesWeapons(filtered)
    }

    setRefreshing(false)
  }

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
        <Text style={{ marginBottom: 0, color: 'white', textAlign: 'left' }}>
          Armas
        </Text>
      </Label>

      <AreaPicker>
        <PickerItem
          mode="dropdown"
          selectedValue={ weapon } 
          onValueChange={ (itemValue, itemIndex)=> { setWeapon(itemValue); addWeapon(itemValue)} }
        >
          { listWeapons?.map((value, index, arr) => {
            return( <Picker.Item label={value.name} value={value} /> )
          }) }
          
      </PickerItem>

      </AreaPicker>

      <Label>
        <Text style={{ marginBottom: 0, color: 'white', textAlign: 'left' }}>
          Armaduras
        </Text>
      </Label>

      <AreaPicker>

        <PickerItem
          mode="dropdown"
          selectedValue={ armor } 
          onValueChange={ (itemValue, itemIndex)=> {setArmor(itemValue); addArmor(itemValue)} }
        >
          { listArmors?.map((value, index) => {
            return( <Picker.Item label={value.name} value={value} /> )
          }) }
          
        </PickerItem>

      </AreaPicker>
      
      <Label>
        <Text style={{  color: 'white', textAlign: 'left' }}>
          Equipamentos
        </Text>
      </Label>

      <ViewEquipment>
        <FlatList 
          data={zombieWeapons}
          renderItem={ ({ item }) => {
            return (
              <AreaEquipment >
                <Item title={item.name} />
                <RemoveButton onPress={ () => removeWeapons(item.id) }>
                  <Icon name='delete' size={20} ></Icon>
                </RemoveButton>
              </AreaEquipment>
            )
          } }
          keyExtractor={ item => item.id }
          extraData={ zombieWeapons }
          refreshing={ refreshing }
          onRefresh={ ()=>refresh() }
        />

        <FlatList  style={{ borderLeftWidth: 1, borderStyle:'dotted',  paddingLeft: 7 }}
          data={zombieArmors}
          renderItem={ ({ item }) => {
            return (
              <AreaEquipment >
                <Item title={item.name} />
                <RemoveButton onPress={ () => removeArmors(item.id) }>
                  <Icon name='delete' size={20} ></Icon>
                </RemoveButton>
              </AreaEquipment>
            )
          } }
          keyExtractor={ item => item.id }
          extraData={ zombieArmors }
          refreshing={ refreshing }
          onRefresh={ ()=>refresh() }
        />

      </ViewEquipment>

      <TextError> { errorMessage  } </TextError> 

      <SubmitButton onPress={ ()=> { save(id) } }>
        <SubmitText>Salvar</SubmitText>
      </SubmitButton>

    </Container>
  )
}

// ZombieForm.navigationOptions = {
//   tabBarLabel: 'Zombie',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="account-circle" size={24} color={tintColor} />
//   )
// };