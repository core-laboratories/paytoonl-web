// filepath: /home/ingrid/work/paytoonl-web/src/Components/Navbar/Navbar.js
import React, { useState, useEffect } from "react";
import logo from "../../../public/static/logo/header_logo.png";
import menuData from "../../../static/data/menu.json";
import { useLocation } from "react-router-dom";

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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
                className={`${
                  open ? "navbarTogglerActive" : ""
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span
                  className={`relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white transition-transform duration-300 ${
                    open ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                ></span>
                <span
                  className={`relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white transition-transform duration-300 ${
                    open ? "-rotate-45 -translate-y-[11px]" : ""
                  }`}
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-0 top-full w-full h-100 rounded-lg px-6 py-5 shadow bg-black bg-opacity-90 dark:bg-dark-2 sm:right-4 sm:top-full sm:h-auto lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:bg-transparent lg:bg-opacity-100 lg:dark:bg-transparent ${
                  !open && "hidden"
                }`}
              >
                <ul className="flex flex-col items-center justify-center h-full lg:flex lg:flex-row lg:items-start lg:justify-start">
                  {menuData.menu.map((item, index) => (
                    <ListItem
                      key={index}
                      NavLink={item.link}
                      hasSubmenu={item.hasSubmenu}
                      submenu={item.submenu}
                    >
                      {item.title}
                    </ListItem>
                  ))}
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

const ListItem = ({ children, NavLink, hasSubmenu, submenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === NavLink;

  return (
    <li className="relative group">
      <a
        href={NavLink}
        className={`flex items-center my-5 text-2xl sm:text-lg font-medium lg:ml-12 lg:inline-flex relative group ${
          submenuOpen
            ? "text-transparent bg-gradient-to-r from-green-500 to-green-700 bg-clip-text"
            : "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:bg-clip-text"
        }`}
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
            } group-hover:stroke-green-500`}
            fill="none"
            stroke={submenuOpen ? "green" : "white"}
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
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-400 to-green-700 transition-all duration-300 ${
            submenuOpen || isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </a>
      {hasSubmenu && submenuOpen && (
        <ul className="absolute z-50 left-0 mt-2 py-[20px] px-[10px] flex flex-col w-48 bg-white shadow-lg rounded-md">
          {submenu.map((subItem, subIndex) => (
            <li key={subIndex} className="-mx-2 hover:bg-gray-200">
              <a
                href={subItem.link}
                className="block -mx-2 px-4 py-2 text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800 hover:bg-clip-text"
              >
                {subItem.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
