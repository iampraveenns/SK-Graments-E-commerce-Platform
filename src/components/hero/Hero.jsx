import Image1 from "../../assets/hero/image.png"
import Image2 from "../../assets/Womens/nighty/img2.png"
import Image3 from "../../assets/Men's/shorts/img2.png"
import Image4 from "../../assets/Men's/shorts/img1.png"
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "This product is good in manifacturing. It help's to wear comfortably, you can be look unique in this dress. The Men's will be attracted. ",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Women's Wear",
    description:
      "This product is good in manifacturing. It help's to wear comfortably, you can be look unique in this dress. The Men's will be attracted. ",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on all men's Wear",
    description:
      "This product is good in manifacturing. It help's to wear comfortably, you can be look unique in this dress. The Men's will be attracted. ",
  },
  {
    id: 4,
    img: Image4,
    title: "Upto 70% off on all men's Wear",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis deserunt architecto, cupiditate rerum laudantium assumenda aspernatur in. Ipsam, voluptatibus?",
  },
]

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Background Pattern   */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
      </div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold ">{data.title}</h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm">
                    {data.description}
                  </p>
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-delay="300">
                    <button
                      className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 duration-200 px-4 py-2 rounded-full" onClick={() => handleOrderPopup()}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 ">
                    <img src={data.img}
                      alt="Image Not Found!"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero