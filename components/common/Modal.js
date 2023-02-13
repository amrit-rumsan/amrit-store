import { useGlobalContext } from "../../context/AppContext";

export default function Modal() {
    const { dispatch } = useGlobalContext();

    return (
        <>
            <div className="h-screen w-screen absolute top-0">
                <div className="modal">
                    <p className="text-lg font-bold">This product is already added to you cart.</p>
                    <button
                        onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
                        className="border-2 border-black px-2"
                    >
                        OK
                    </button>
                </div>
            </div>
        </>
    )
}