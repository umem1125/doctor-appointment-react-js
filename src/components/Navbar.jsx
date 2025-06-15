import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-white">
      <NavLink to="/" aria-label="Home">
        <img
          className="w-44 cursor-pointer"
          src={assets.doctor_app_logo}
          alt="Logo"
        />
      </NavLink>

      <ul className="hidden md:flex items-start gap-5 font-medium">
        {["/", "/about", "/doctors", "/contact"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-primary transition-colors duration-200"
            }
          >
            <li className="py-1 cursor-pointer">
              {path === "/" ? "HOME" : path.slice(1).toUpperCase()}
            </li>
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-primary cursor-pointer"
                >
                  Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="hover:text-primary cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-primary cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="border border-primary text-primary px-5 py-2 rounded-full font-light hover:bg-primary hover:text-white transition-colors hidden md:inline-block"
              aria-label="Login"
            >
              Login
            </button>
          </>
        )}

        {/* Hamburger Menu Icon */}
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 md:hidden cursor-pointer"
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between px-5 py-5 border-b border-gray-300">
            <img className="w-36" src={assets.doctor_app_logo} alt="Logo" />
            <button
              className="w-7"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
            >
              <img src={assets.cross_icon} alt="Close" />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium">
            {["/", "/about", "/doctors", "/contact"].map((path, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1 w-full text-center"
                    : "hover:text-primary transition-colors duration-200 w-full text-center"
                }
              >
                <li className="py-3 cursor-pointer">
                  {path === "/" ? "HOME" : path.slice(1).toUpperCase()}
                </li>
              </NavLink>
            ))}
            {!token && (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setShowMenu(false)}
                  className="hover:text-primary transition-colors duration-200 w-full text-center"
                >
                  <li className="py-3 cursor-pointer border-t border-gray-200 w-full">
                    Login
                  </li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
