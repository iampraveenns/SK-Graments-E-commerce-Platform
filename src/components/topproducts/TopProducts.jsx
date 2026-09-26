import Img1 from "../../assets/TopProducts/img1.png"
import Img2 from "../../assets/TopProducts/img2.png"
import Img3 from "../../assets/TopProducts/img3.png"
import { FaStar } from "react-icons/fa6"

const ProductData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, est."
    },
    {
        id: 2,
        img: Img2,
        title: "Checked shirt",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos inventore neque ipsum voluptate ex? Fugiat blanditiis molestias dicta aperiam cupiditate?"
    },
    {
        id: 3,
        img: Img3,
        title: "Formal Pant",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos inventore neque ipsum voluptate ex? Fugiat blanditiis molestias dicta aperiam cupiditate?"
    },
]

const TopProducts = ({ handleOrderPopup }) => (
    <div className="dark:bg-gray-950 dark:text-white">
        <div>
            {/* Header Section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto py-4 ">
                <p data-aos="fade-up" className="text-primary text-sm">Best Selling Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                <p data-aos="fade-up" className="text-sm text-gray-400 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit eligendi cum.
                </p>
            </div >
            {/* Body Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center" >
                {ProductData.map((data) => (
                    <div
                        data-aos="zoom-out"
                        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary/70 hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4 transition-all">

                        {/* image section */}
                        <div>
                            <img src={data.img} alt="image not found!"
                                className="max-w-[140px] mx-auto block transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md p-4 " />

                        </div>
                        {/* details section */}
                        <div className="p-4 text-center ">
                            {/* Star Section */}
                            <div className="w-full flex items-center justify-center gap-1 ">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p
                                className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 "
                            >{data.description}</p>
                            <button
                                className="bg-primary rounded-full px-4 py-1 text-white mt-4 group-hover:bg-white duration-300 transition-all group-hover:text-primary"
                                onClick={() => handleOrderPopup()}
                            > Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default TopProducts