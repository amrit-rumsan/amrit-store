import Link from "next/link";

export default function Card({ p }) {
    return (
        <Link href={`/items/${p.id}`}>
            <div className="bg-[#E2D1F9] rounded-lg relative shadow-2xl">
                <img className="w-60 h-32 rounded-lg hover:scale-105 hover:shadow-lg" src={p.thumbnail} alt={p.title} />
                <p className="bg-[#8AAAE5] rounded-lg text-sm p-1 absolute top-1 left-1">{p.discountPercentage}% off</p>
                <div className="p-2">
                    <h1 className="font-bold h-20">{p.title}</h1>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">${p.price}</p>
                        <button className="bg-[#317773] p-1 rounded-lg active:scale-75">Add to Cart</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}