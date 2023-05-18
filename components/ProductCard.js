import Image from 'next/image';
import { useGlobalContext } from '../context/AppContext';
import { useRouter } from 'next/router';

export default function ProductCard() {
	const { state, dispatch } = useGlobalContext();
	const router = useRouter();

	return (
		<div className="p-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
			{state?.product?.map(p => {
				return (
					<div className="bg-[#E2D1F9] rounded-lg relative shadow-2xl overflow-hidden" key={p.id}>
						<div className="overflow-hidden">
							<Image
								onClick={() => router.push(`/items/${p.id}`)}
								className="w-60 h-32 rounded-t-lg hover:scale-110 duration-300"
								src={p.thumbnail}
								alt={p.title}
								width={500}
								height={500}
								priority
							/>
						</div>
						<p className="font-semibold text-sm p-1 absolute bottom-11 right-2">
							{p.discountPercentage}% off
						</p>
						<div className="p-2 overflow-hidden">
							<h1 className="font-bold h-20">{p.title}</h1>
							<div className="flex justify-between items-center">
								<p className="font-bold">${p.price}</p>
								<button
									onClick={() => dispatch({ type: 'ADD_CART', payload: p })}
									className="bg-[#317773] p-1 rounded-lg active:scale-75"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
