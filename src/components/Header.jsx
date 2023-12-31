import { useState } from "react";
import navLogo from "../assets/bgs-nav.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-base-900 md:px-4 py-2 px-2 sm:px-4 md:px-6 lg:px-6">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
        <div className="relative w-44 ml-0 2xl:ml-6">
          <div className="border-inset-gradient"></div>
          <img src={navLogo} alt="black girl sparkle logo" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-0 2xl:mr-6"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="w-full">
            <ul className="flex flex-col 2xl:text-2xl xl:text-xl items-center font-gloria">
              <li>
                <a
                  href="#pilot-section"
                  className="hover:text-bgsBgBlue hover:drop-shadow-md"
                  aria-current="page"
                >
                  PILOT
                </a>
              </li>

              <li>
                <a
                  href="#character-section"
                  className="hover:text-bgsBgPurple hover:drop-shadow-md"
                >
                  THE GIRLS
                </a>
              </li>

              <li>
                <a
                  href="#synopsis-section"
                  className="hover:text-bgsBgOrange hover:drop-shadow-md"
                >
                  SYNOPSIS
                </a>
              </li>

              <li>
                <a
                  href="#footer-section"
                  className="hover:text-bgsBgRed hover:drop-shadow-md"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
