import Logo from '../../assets/logo.png'
import DarkMode from './DarkMode';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from 'react-icons/fa6';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Men's Wear",
    link: "/#"
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* Upper Navbar */}
        <div className="bg-primary/40 py-2 ">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl  sm:text-3xl flex gap-2 "><img src={Logo} alt="Image Not Found" className='w-10' />
                SK Textiles
              </a>
            </div>

            {/* Search Bar and order button */}
            <div className='flex justify-between items-center gap-4 '>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-purple-500 focus:w-[300px]"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 " />
              </div>

              {/* Order Button */}
              <button onClick={() => handleOrderPopup()} className="bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden  transition-all duration-200 ">
                  Order
                </span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer ' />
              </button>

              {/* dark Mode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Lower Navbar */}
        <div className='flex justify-center shadow-md dark:bg-black dark:text-white border'>
          <ul className='sm:flex gap-4 hidden items-center'>
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                  className='inline-block px-4 hover:text-primary'>
                  {data.name}</a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className='group relative cursor-pointer '>
              <a href="#" className='flex items-center gap-[2px] py-2 hover:text-primary'>
                Trending
                <span>
                  <FaCaretDown
                    className="transition-all duration-200 group-hover:-rotate-180" />
                </span>
              </a>
              <div className='absolute z-[9999] hidden group-hover:block w-[150px] bg-white text-black p-2 rounded-md'>
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className='inline-block w-full p-2 hover:bg-primary/20 rounded-md'>{data.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar