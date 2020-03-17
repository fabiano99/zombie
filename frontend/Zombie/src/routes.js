import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Preload from './components/Preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import WeaponForm from './pages/Weapon/Form';
import WeaponList from './pages/Weapon/List';
import ArmorForm from './pages/Armor/Form';
import ArmorList from './pages/Armor/List';
import ZombieForm from './pages/Zombie/Form';
import ZombieList from './pages/Zombie/List';



const Routes = createAppContainer(
	createSwitchNavigator(
		{
			Sign: createSwitchNavigator({
				Preload,
				SignIn,
				SignUp
			}),
			App: createBottomTabNavigator({
				Dashboard,
				WeaponList,
				WeaponForm,
				ArmorList,
				ArmorForm,
				ZombieList,
				ZombieForm
			}, {
				tabBarOptions:{
				  showLabel: false,
				  activeTintColor: '#FFF',
				  style:{
					backgroundColor: '#1B2C4C'
				  }
				}
			  })
		},
	),
)

export default Routes;