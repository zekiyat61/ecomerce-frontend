import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, [token]);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setToken("");
    setCartItems({});
    setUserEmail("");
  };

  return (
    <div className="flex items-center justify-between py-3 px-5 bg-white border-b border-gray-200 w-full h-20">
      {/* Logo on the left */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full transition-transform hover:scale-105"
          alt="Logo"
        />
      </Link>

      {/* Navigation links in the center */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700 mx-auto">
        <NavLink to="/" className="hover:text-pink-500 transition-colors">
          <p>HOME</p>
        </NavLink>
        <NavLink
          to="/collection"
          className="hover:text-pink-500 transition-colors"
        >
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="hover:text-pink-500 transition-colors">
          <p>ABOUT</p>
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-pink-500 transition-colors"
        >
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Icons on the right */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          {userEmail && (
            <p className="text-pink-500 text-sm font-medium hidden sm:block">
              {userEmail}
            </p>
          )}
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            src={assets.search_icon}
            className="w-5 cursor-pointer transition-transform hover:scale-110"
            alt="Search"
          />
        </div>

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer transition-transform hover:scale-110"
            src={assets.profile}
            alt="Profile"
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg shadow-sm">
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-black transition-colors"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart}
            className="w-5 min-w-5 transition-transform hover:scale-110"
            alt="Cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-pink-500 text-white aspect-square rounded-full text-[9px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile menu icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu}
          className="w-5 cursor-pointer sm:hidden transition-transform hover:scale-110"
          alt="Menu"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-transform transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } w-4/5 sm:hidden shadow-lg z-50`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer bg-pink-50"
          >
            <img className="h-5 rotate-180" src={assets.menu} alt="Close" />
            <p className="text-pink-500">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-pink-50 transition-colors"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-pink-50 transition-colors"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-pink-50 transition-colors"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-pink-50 transition-colors"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
