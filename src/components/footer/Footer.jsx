import footerlogo from "../../assets/Footer/img1.png"
import banner from "../../assets/Footer/img2.png"
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div style={BannerImg}
            className="text-white">
            <div className="container">
                <div data-aos="zoom-in" className="grid grid-cols-3 pb-44 pt-5 ">
                    {/* company details */}
                    <div className="py-3 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 w-[250px]">
                            <img src={footerlogo} alt="image not found!" className="max-w-[50px]" />
                            SK Garments
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur blanditiis neque. Fugit provident voluptates id officiis, a veniam autem!
                        </p>
                    </div>
                    {/* Footer Links */}
                    <div className="grid col-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
                        <div>
                            <div className="py-4 px-8">
                                <h1 className="sm:text-2xl font-bold sm:text-left text-justify "
                                >Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((link) => (
                                            <li className="cursor-pointer hover:text-primary
                                        hover:translate-x-1 duration-300 text-gray-200" key={link.title}
                                            > <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="py-4 px-8">
                                <h1 className="sm:text-2xl font-bold sm:text-left   text-justify mb-3"
                                > Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((link) => (
                                            <li className="cursor-pointer hover:text-primary
                                        hover:translate-x-1 duration-300 text-gray-200" key={link.title}
                                            > <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>


                        {/* social links */}

                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6 w-[200px] flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Erode, TamilNadu</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobileAlt />
                                    <p>+91 9092027325</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer