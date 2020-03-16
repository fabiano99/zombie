import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes = createAppContainer(
	createSwitchNavigator(
		{
			Sign: createSwitchNavigator({
				SignIn,
				SignUp
			})
		},
	),
)

export default Routes;