import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsNavbarVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${
      isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto bg-white px-4 sm:px-6 lg:px-0">
        <div className="max-w-screen-2xl">
          <header className="flex items-center justify-between py-3 md:py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-lg md:text-xl text-black font-semibold"
            aria-label="logo"
          >
            <img src="/static/icons/logo.svg" alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
            PayTo Alliance
          </a>

          <nav className="hidden gap-12 lg:flex">
            <a
              href="/solutions"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Solutions
            </a>
            <a
              href="/developers"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Developers
            </a>
            <a
              href="/alliance"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Alliance
            </a>
          </nav>

          <a
            href="/joinus"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Join Alliance
          </a>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            {isMobileMenuOpen ? (
              <>
                <X className="w-6 h-6" />
              </>
            ) : (
              <>
                <Menu className="w-6 h-6" />
              </>
            )}
          </button>
        </header>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white lg:hidden h-screen">
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-200 bg-white">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-lg text-black font-semibold"
                aria-label="logo"
              >
                <img src="/static/icons/logo.svg" alt="logo" className="w-8 h-8" />
                PayTo Alliance
              </a>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-4 gap-4 text-lg bg-white">
                <a
                  href="/solutions"
                  className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 py-3 px-2 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
                >
                  Solutions
                </a>
                <a
                  href="/developers"
                  className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 py-3 px-2 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
                >
                  Developers
                </a>
                <a
                  href="/alliance"
                  className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 py-3 px-2 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
                >
                  Alliance
                </a>
                <a
                  href="/joinus"
                  className="rounded-lg bg-gray-200 px-8 py-3 text-center text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 mt-4"
                  onClick={toggleMobileMenu}
                >
                  Join Alliance
                </a>
              </nav>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
