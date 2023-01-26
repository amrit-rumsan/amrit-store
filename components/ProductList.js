import { useGlobalContext } from "../context/AppContext";
import Link from "next/link"
import { useRouter } from "next/router";


export default function ProductList() {
    const { state, dispatch } = useGlobalContext();
    // console.log(state)
    const router = useRouter();

    return (
        <div className="p-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {state?.product?.map(p => {
                return (
                    // <Card p={p} key={p.i} />
                    <div className="bg-[#E2D1F9] rounded-lg relative shadow-2xl" key={p.id}>
                        {/* <Link href={`/items/${p.id}`}> */}
                        <img onClick={() => router.push(`/items/${p.id}`)} className="w-60 h-32 rounded-lg hover:scale-105 hover:shadow-lg" src={p.thumbnail} alt={p.title} />
                        {/* </Link> */}
                        <p className="bg-[#8AAAE5] rounded-lg text-sm p-1 absolute top-1 left-1">{p.discountPercentage}% off</p>
                        <div className="p-2">
                            <h1 className="font-bold h-20">{p.title}</h1>
                            <div className="flex justify-between items-center">
                                <p className="font-bold">${p.price}</p>
                            <button onClick={() => dispatch({ type: 'ADD_CART', payload: p })} className="bg-[#317773] p-1 rounded-lg active:scale-75">Add to Cart</button>   
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}