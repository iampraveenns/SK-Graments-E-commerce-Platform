import BannerImg from "../../assets/Banner/image.png"
import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

const banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:bg-gray-950 dark:text-white '>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* image section */}
                <div data-aos="zoom-out">
                    <img src={BannerImg} 
                    alt="image not found!"
                    className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgb(00,0,1)] object-cover " 
                    />
                </div>
                {/* text details section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-3xl sm:text-3xl font-bold"
                    >September sale upto 50% Off</h1>
                    <p className="text-sm text-gray-500 tracking-wide leading-5" >
                        Lorem ipsum dolor sit amet  adipisicing elit. Placeat repellat excepturi, accusamus impedit!
                    </p>
                    <div className="flex flex-col gap-4" >
                        <div data-aos="fade-up" className="flex gap-4 items-center">
                            <GrSecure className="text-4xl h-7 w-12 p-1 shadow-sm rounded-full bg-violet-100 dark:bg-violet-500"
                            />
                            <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4 ">
                            <IoFastFood className="text-4xl h-7 w-12 shadow-sm p-1  rounded-full bg-green-100 dark:bg-green-500" 
                            />
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <GiFoodTruck className="text-4xl h-7 w-12 p-1 shadiow-sm bg-violet-100 rounded-full dark:bg-violet-500"
                            />
                            <p>Easy Payment Method</p>
                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <GiFoodTruck className="text-4xl h-7 w-12 p-1 rounded-full bg-green-100 dark:bg-green-500"
                            />
                            <p>Get offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default banner