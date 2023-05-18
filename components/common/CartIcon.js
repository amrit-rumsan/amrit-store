import Link from "next/link";
import { useGlobalContext } from "../../context/AppContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartIcon() {
    const { state } = useGlobalContext();
    return (
        <Link href="/items/cart">
            <div className="absolute top-20 right-5">
                <span className="text-3xl"><AiOutlineShoppingCart /></span>
                <span className="bg-[#317773] text-white px-1 rounded-lg absolute bottom-4 right-0">{state.cart}</span>
            </div>
        </Link>
    )
}