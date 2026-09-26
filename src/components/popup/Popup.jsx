import { IoCloseOutline } from "react-icons/io5"
import { toast } from "react-hot-toast"

const Popup = ({ orderPopup, setOrderPopUp }) => {
    return (
        <>
            {orderPopup && (
                <div className="popup">
                    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50  backdrop-blur-sm">
                        <div
                            className="fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 p-4 shadow-sm bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px] ">
                            {/* header */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1>Order Now</h1>
                                </div>
                                <div>
                                    <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setOrderPopUp(false)} />
                                </div>
                            </div>
                            {/* form section */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full h-full border border-gray-300 rounded-full px-2 py-1 mt-4 mb-4 dark:border-gray-500 dark:bg-gray-800 "
                                />

                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full h-full border border-gray-300 rounded-full px-2 py-1 mb-4 dark:border-gray-500 dark:bg-gray-800 "
                                />

                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full h-full border border-gray-300 rounded-full px-2 py-1 mb-4 dark:border-gray-500 dark:bg-gray-800 "
                                />
                                <div className="flex justify-center">
                                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 rounded-full px-4 py-1 text-white " onClick={() => {toast.success('Order Confirmed Successfully!')}}
                                    >Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Popup