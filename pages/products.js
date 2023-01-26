import Link from "next/link";
import { useState } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/common/Loading";
import { useGlobalContext } from "../context/AppContext";
import Back from "../components/common/Back";
import CartIcon from "../components/common/CartIcon";


export default function Products() {
    const { state, dispatch } = useGlobalContext();
    // const [ pdt, setPdt ] = useState(state.product);
    // console.log(pdt);

    const [searchKey, setSearchKey] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        handleSearchResult();
    }

    const handleSearchResult = () => {
        const allProducts = state.product;
        const filteredProduct = allProducts.filter(p => p.title.toLowerCase().includes(searchKey.toLowerCase().trim()));
        dispatch({ type: 'SEARCH_PRODUCT', payload: filteredProduct })
    }

    // const handleProduct = (l) => {
    //     const allProducts = state.product;
    //     const filteredcategory = allProducts.filter(p => p.category.includes(l));
    //     dispatch({ type: 'CATEGORY_PRODUCT', payload: filteredcategory })
    // }

    const renderCategoryList = () => {
        return (
            <div className="flex justify-around mt-5">
                {[...new Set(state.product.map(c => c.category))].map((l,i) => <p key={i} className="bg-[#8AAAE5] p-1 rounded-md">{l}</p>)}
            </div>
        )
    }


    return (
        <>
            <div className="text-center">
                <h1 className=" p-5 font-bold text-3xl ">All Products</h1>
                <Link href="/"><Back /></Link>
                <CartIcon />
            </div>

            <div className="flex justify-center">
                <form onSubmit={formSubmit}>
                    <input
                        className="p-2 w-96 outline-none"
                        type='search'
                        value={searchKey}
                        placeholder="Search....."
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                </form>
            </div>
            {renderCategoryList()}
            {state.loading ? <Loading /> : <ProductList />}
        </>
    )
}