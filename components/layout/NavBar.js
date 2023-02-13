import Link from "next/link";

const menu = [
    {
        name: 'About',
        link: ''
    },
    // {
    //     name: 'Categories',
    //     link: ''
    // },
    {
        name: 'Products',
        link: '/products'
    },
    {
        name: 'Contact',
        link: ''
    },
]

export default function NavBar() {
    return (
        <div className="flex justify-between bg-[#8AAAE5] p-5 border-b-2">
            <div className="w-36 flex font-bold">
                <p className="w-3/6 text-center bg-red-600 text-white">amrit</p>
                <p className="w-3/6 text-center bg-white">store</p>
            </div>
            <div className="">
                <ul className="flex gap-5">
                    {menu.map((m) => <Link href={`${m.link}`}><li className="hover-underline-animation hover:text-red-600">{m.name}</li></Link>)}
                </ul>
            </div>
        </div>
    )
}