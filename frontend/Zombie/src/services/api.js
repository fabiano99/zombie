import { create } from 'apisauce';

const api = create({
	baseURL: 'http://192.168.1.157:3333',
});

api.addResponseTransform(response => {
	if (!response.ok) throw response;
});

export default api;