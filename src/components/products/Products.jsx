import Img1 from "../../assets/Womens/Ethnic/image.png"
import Img2 from "../../assets/Womens/western/image.png"
import Img3 from "../../assets/Womens/goggles/image.png"
import Img4 from "../../assets/Womens/T-shirts/image.png"
import Img5 from "../../assets/Womens/fashin/image.png"
import { FaStar } from "react-icons/fa"

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className=" dark:bg-gray-950 dark:text-white py-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-primary text-sm">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold">Top Selling Products</h1>
          <p data-aos="fade-up" className="text-sm text-gray-400 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit eligendi cum.
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3 sm:gap-5">
            {/* Card Section */}
            { ProductData.map((data) => (
                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} 
                key={data.id} 
                className="space-y-3"
                >
                  <div>
                  <img src={data.img} alt="image not found!" className="h-[180px] w-[130px] sm:h-[220px] sm:w-[150px] object-cover rounded-md " />
                    <h3 className="font-semibold text-sm sm:text-base">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md"
            >View all button</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Products