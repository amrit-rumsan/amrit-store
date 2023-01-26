import Back from "../../components/common/Back";
import Link from "next/link";
import { useGlobalContext } from "../../context/AppContext";
import tw from "tailwind-styled-components";
import { useState } from "react";

const Th = tw.th`
p-2 bg-orange-500
`

export default function Cart() {
    // const [quantity, setQuantity] = useState(1);
    const { state, dispatch } = useGlobalContext();

    // console.log(state.price);
    console.log(state.cartProduct);

    const func = (total, sum) => {
        return total + sum
    }

    // const handleClick = (id) => {
    //     let updatedCart = state.cartProduct.map(product => {
    //         if (product.id === id) {
    //             product.quantity += 1;
    //         }
    //         return product;
    //     });
    //     setState({...state, cartProduct: updatedCart });
    // };

    const handleClick = (id) => {
        // {state.cartProduct}
        dispatch({ type: "QUANTITY_INC", payload: id })
    }
    return (
        <>
            <Link href="/products"><Back /></Link>
            <div className="h-screen w-full pt-44 px-20">
                {state.cartProduct.length > 0 ?
                    (<table className="w-full">
                        <thead className="w-full">
                            <tr className="w-full">
                                <Th className="w-1/2 text-start">PRODUCT</Th>
                                <Th className="text-start">QUANTITY</Th>
                                <Th className="text-start">UNIT PRICE</Th>
                                <Th className="text-end">SUB TOTAL</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.cartProduct.map((p) =>
                                <tr key={p.id}>
                                    <td className="p-2"><div className="flex"><img className="w-16 mr-2" src={p.thumbnail} />{p.title}</div></td>
                                    <td className="p-2">
                                        <div className="flex">
                                            <span key={p.id} className="text-xl font-bold"> {p.quantity}</span>
                                            <div>
                                                <img className="cursor-pointer" onClick={()=>handleClick(p)} width={20} src="/images/up.png" />
                                                <img className="cursor-pointer" onClick={()=> dispatch({type:"QUANTITY_DEC", payload: p})} width={20} src="/images/down.png" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 text-start">${p.price}</td>
                                    <td className="p-2 text-end">${p.subTotal}</td>
                                </tr>
                            )}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="p-2 font-bold text-right">Total</td>
                                <td className="p-2 text-center">${state.price.reduce(func)}</td>
                            </tr>
                        </tfoot>
                    </table>) : "Cart is Empty!"}

            </div>
        </>
    )
}