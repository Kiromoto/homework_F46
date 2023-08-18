import axios from 'axios';
import App from "./App";
const API_URL = 'http://127.0.0.1:8000';

export default class DishsService{

	constructor(){}


	getDishs() {
		const url = `${API_URL}/api/dishs/`;
		return axios.get(url).then(response => response.data);
		console.log(response.data);

	}
	// getCustomersByURL(link){
	// 	const url = `${API_URL}${link}`;
	// 	return axios.get(url).then(response => response.data);
	// }
	// getCustomer(pk) {
	// 	const url = `${API_URL}/api/customers/${pk}`;
	// 	return axios.get(url).then(response => response.data);
	// }
	// deleteCustomer(customer){
	// 	const url = `${API_URL}/api/customers/${customer.pk}`;
	// 	return axios.delete(url);
	// }
	// createCustomer(customer){
	// 	const url = `${API_URL}/api/customers/`;
	// 	return axios.post(url,customer);
	// }
	// updateCustomer(customer){
	// 	const url = `${API_URL}/api/customers/${customer.pk}`;
	// 	return axios.put(url,customer);
	// }
}

