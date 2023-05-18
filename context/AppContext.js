import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ProductFetch } from '../components/ProductFetch';
import { AppReducer, initialState } from './AppReducer';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	// const [product, setProduct] = useState([]);

	// useEffect(() => {
	//     ProductFetch()
	//         .then((data) => {
	//             setProduct(data);
	//         })
	// }, [])

	useEffect(() => {
		ProductFetch()
			.then(data => {
				dispatch({ type: 'FETCH_SUCCESS', payload: data });
				// console.log(data)
			})
			.catch(error => {
				dispatch({ type: 'FETCH_FAIL' });
			});
	}, []);
	// console.log(state)

	return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

const useGlobalContext = () => {
	return useContext(ProductContext);
};

export { ProductContextProvider, useGlobalContext };
