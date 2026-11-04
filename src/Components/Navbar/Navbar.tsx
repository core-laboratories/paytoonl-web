import React, { useState, useEffect } from "react";
import { Menu, X, Monitor, Moon, Sun } from "lucide-react";
import Brand from "../Brand/Brand.tsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "auto">(() => {
    try {
      const saved = localStorage.getItem("payto-theme");
      return saved === "light" || saved === "dark" ? saved : "auto";
    } catch { return "auto"; }
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const dark = theme === "dark" || (theme === "auto" && media.matches);
      document.documentElement.classList.toggle("dark", dark);
      document.documentElement.style.colorScheme = dark ? "dark" : "light";
    };
    apply();
    media.addEventListener("change", apply);
    try { localStorage.setItem("payto-theme", theme); } catch { /* Storage may be unavailable. */ }
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  const themeSwitch = (
    <div className="theme-switch" role="group" aria-label="Color theme">
      {([
        { value: "light", label: "Light", Icon: Sun },
        { value: "dark", label: "Dark", Icon: Moon },
        { value: "auto", label: "Auto", Icon: Monitor },
      ] as const).map(({ value, label, Icon }) => (
        <button key={value} type="button" title={`${label} theme`} aria-label={`${label} theme`}
          aria-pressed={theme === value} className={theme === value ? "is-active" : ""}
          onClick={() => setTheme(value)}>
          <Icon size={15} aria-hidden="true" /><span>{label}</span>
        </button>
      ))}
    </div>
  );

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
    <div className="site-header sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto bg-white px-4 sm:px-6 lg:px-0">
        <div className="max-w-screen-2xl">
          <header className="flex items-center justify-between py-3 md:py-4">
          <a
            href="/"
            className="site-brand-link"
            aria-label="PayTo Alliance home"
          >
            <Brand />
          </a>

          <nav className="hidden gap-8 lg:flex">
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
              href="/map"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Map
            </a>
            <a
              href="/alliance"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Alliance
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
          {themeSwitch}
          <a
            href="/joinus"
            className="rounded-full bg-indigo-600 px-6 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Join Alliance
          </a>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
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
          <div className="fixed inset-0 z-50 flex h-dvh flex-col overflow-hidden bg-white lg:hidden">
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-200 bg-white">
              <a
                href="/"
                className="site-brand-link"
                aria-label="PayTo Alliance home"
              >
                <Brand />
              </a>
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
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
                href="/map"
                  className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 py-3 px-2 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
              >
                  Map
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
              <div className="pt-4">{themeSwitch}</div>
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
