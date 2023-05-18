import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/AppContext';
import CartIcon from '../../components/common/CartIcon';
import Back from '../../components/common/Back';

export default function Items() {
	const router = useRouter();
	const { pid } = router.query;

	const [item, setItem] = useState([]);

	const { state, dispatch } = useGlobalContext();

	useEffect(() => {
		// console.log(state)
		let item = state.product.find(z => z.id === parseInt(pid));

		if (item) {
			setItem(item);
		}
	}, [state.product, pid]);

	// console.log(item)

	return (
		<div className="h-screen flex items-center justify-center">
			<Link href="/products">
				<Back />
			</Link>
			<CartIcon />
			<div className="flex">
				<div className="w-11/12">
					<Image src={item.thumbnail} alt={item.name} width={500} height={500} />
				</div>
				<div className="w-96 p-10 flex flex-col gap-2">
					<h1 className="font-extrabold">{item.title}</h1>
					<p>{item.description}</p>
					<p className="font-bold">${item.price}</p>
					<button
						onClick={() => dispatch({ type: 'ADD_CART', payload: item })}
						className="bg-[#317773] p-1 rounded-lg active:scale-75"
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
