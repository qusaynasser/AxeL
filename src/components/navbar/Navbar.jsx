import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { navbarData } from '../../DataForPage/dummyData';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';  // Import a menu icon

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // State to manage mobile menu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div
        className={
          scroll
            ? 'h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20'
            : 'bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20'
        }
      >
        <div className="logo pl-4 sm:pl-20 grid grid-cols-2 justify-items-center items-center content-center w-full">
          <div className="w-4/5">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          {/* Hamburger menu for mobile */}
          <div className="flex sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="text-xl" />
            </button>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden sm:flex flex-row w-full">
            {navbarData.map((item) => (
              <div key={item.id} className="">
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className="cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500 duration-500"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute text-center top-16 left-0 w-full bg-white shadow-lg sm:hidden">
            {navbarData.map((item) => (
              <div key={item.id} className="p-4">
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className="cursor-pointer text-dark font-inter text-lg  font-bold tracking-tight hover:text-blue-500 duration-500"
                  onClick={() => setIsOpen(false)}  // Close menu on link click
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
