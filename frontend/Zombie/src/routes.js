import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Preload from './components/Preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Weapon from './pages/Weapon';
import Armor from './pages/Armor';
import Zombie from './pages/Zombie';



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
				Weapon,
				Armor,
				Zombie
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