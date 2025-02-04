// filepath: /home/ingrid/work/paytoonl-web/src/Components/Navbar/Navbar.js
import React, { useState, useEffect } from "react";
import logo from "../../../public/static/logo/header_logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setScrollingUp(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling up
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full bg-transparent bg-opacity-70 shadow-md backdrop-blur-sm backdrop-brightness-75 font-display ${
        isSticky && scrollingUp ? "fixed top-0 z-50" : ""
      }`}
    >
      <div className="w-full h-[105px]">
        <div className="container mx-auto h-full relative flex items-center justify-between">
          <div className="w-60 max-w-full">
            <a href="/#" className="block w-full py-5">
              <img src={logo} alt="logo" className="dark:hidden mt-[13px]" />
            </a>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#" hasSubmenu={true}>
                    Solutions
                  </ListItem>
                  <ListItem NavLink="/#">Partners</ListItem>
                  <ListItem NavLink="/#">Developers</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button className="relative bg-white  text-md  font-large cursor-pointer rounded-md inline-flex items-center justify-center py-4 px-12 text-center text-lg font-large hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500">
                <span className="relative z-10 uppercase font-bold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
                  Join Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, hasSubmenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <li className="relative group">
      <a
        href={NavLink}
        className="flex items-center py-2 text-lg font-medium text-white hover:text-gray-300 lg:ml-12 lg:inline-flex relative group"
        onClick={(e) => {
          if (hasSubmenu) {
            e.preventDefault();
            setSubmenuOpen(!submenuOpen);
          }
        }}
      >
        {children}
        {hasSubmenu && (
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
              submenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      {hasSubmenu && submenuOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <li>
            <a
              href="/#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              PayTo
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              FinTag
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              ORIC
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              ICAN
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};
