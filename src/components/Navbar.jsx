import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

// Book Icon SVG
const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/95 text-gray-800 shadow-lg backdrop-blur-md py-3"
          : "bg-gradient-to-b from-black/50 to-transparent text-white py-5"
      }`}
    >
      <Link to="/" className="hover:opacity-80 transition-opacity">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-10 transition-all duration-300 ${isScrolled ? "invert opacity-90" : ""}`}
        />
      </Link>

      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group relative text-sm font-medium tracking-wide ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${
              location.pathname === link.path ? "w-full" : ""
            }`} />
          </Link>
        ))}
        <button
          className={`border px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
            isScrolled 
              ? "text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white" 
              : "text-white border-white hover:bg-white hover:text-gray-800"
          }`}
          onClick={() => navigate("/owner")}
        >
          Dashboard
        </button>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button className="hover:opacity-80 transition-opacity">
          <img
            src={assets.searchIcon}
            alt="search"
            className={`${isScrolled ? "invert" : ""} h-6 w-6`}
          />
        </button>
        {user ? (
          <UserButton appearance={{
            elements: {
              avatarBox: "w-10 h-10",
              userButtonPopoverCard: "shadow-xl"
            }
          }}>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 md:hidden">
        {user && (
          <UserButton appearance={{
            elements: {
              avatarBox: "w-8 h-8"
            }
          }}>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <img
            src={assets.menuIcon}
            alt="menu"
            className={`${isScrolled ? "invert" : ""} h-5 w-5`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md text-gray-800 flex flex-col md:hidden items-center justify-center gap-8 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button 
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close-menu" className="h-5 w-5" />
        </button>
        {navLinks.map((link, i) => (
          <Link 
            key={i} 
            to={link.path} 
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-gray-600 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        {user ? (
          <button
            className="border border-gray-800 px-6 py-2 text-sm font-medium rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>
        ) : (
          <button 
            onClick={openSignIn} 
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;















