import { create } from 'apisauce';
import { AsyncStorage } from 'react-native';
const api = create({
	baseURL: 'http://192.168.1.157:3333',
});

api.addAsyncRequestTransform(request => async () => {
	const token = await AsyncStorage.getItem('@ZombieApi:token');
  
	if (token)
	  request.headers['Authorization'] = `Bearer ${token}`;
  });

api.addResponseTransform(response => {
	if (!response.ok) throw response;
});

export default api;