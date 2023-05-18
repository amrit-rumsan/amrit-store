import axios from 'axios';

export async function ProductFetch() {
	try {
		const { data } = await axios.get('https://dummyjson.com/products');
		return data.products;
	} catch (error) {
		console.log(error);
	}
}
