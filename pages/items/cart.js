import Back from "../../components/common/Back";
import Link from "next/link";
import { useGlobalContext } from "../../context/AppContext";
import tw from "tailwind-styled-components";
import { AiFillDelete } from "react-icons/ai";

const Th = tw.th`
p-2 bg-orange-500
`

export default function Cart() {
    const { state, dispatch } = useGlobalContext();

    const handleClick = (id) => {
        dispatch({ type: "QUANTITY_INC", payload: id })
    }

    const handleDelete = (p) => {
        dispatch({ type: "DELETE_CART", payload: p })
    }

    const total = state.cartProduct.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <>
            <Link href="/products"><Back /></Link>
            <div className="w-full pt-32 pb-20 px-20">
                {state.cartProduct.length > 0 ?
                    (<table className="w-full">
                        <thead className="w-full">
                            <tr className="w-full">
                                <Th className="w-1/2 text-start">PRODUCT</Th>
                                <Th className="text-center">QUANTITY</Th>
                                <Th className="text-center">UNIT PRICE</Th>
                                <Th className="text-center">SUB TOTAL</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.cartProduct.map((p) =>
                                <tr key={p.id}>
                                    <td className="p-2"><div className="flex"><img className="w-16 mr-2" src={p.thumbnail} />{p.title}</div></td>
                                    <td className="p-2">
                                        <div className="flex items-center justify-center gap-3">
                                            <span key={p.id} className="text-xl font-bold"> {p.quantity}</span>
                                            <div>
                                                <img className="cursor-pointer" onClick={() => handleClick(p)} width={20} src="/images/up.png" />
                                                <img className="cursor-pointer" onClick={() => dispatch({ type: "QUANTITY_DEC", payload: p })} width={20} src="/images/down.png" />
                                            </div>
                                            <AiFillDelete className="cursor-pointer" onClick={() => handleDelete(p)} />
                                        </div>
                                    </td>
                                    <td className="text-center">${p.price}</td>
                                    <td className="text-center">${p.price * p.quantity}</td>
                                </tr>
                            )}

                        </tbody>
                        <tfoot className="border-y-2 border-black">
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="p-2 font-bold text-center">Total</td>
                                <td className="p-2 text-center">${total}</td>
                            </tr>
                        </tfoot>
                    </table>) : <div className="flex justify-center"><div className="font-bold text-xl">Cart is Empty!</div></div>}

            </div>
        </>
    )
}