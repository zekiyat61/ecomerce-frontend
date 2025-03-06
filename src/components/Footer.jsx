import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-0 text-sm">
        {" "}
        {/* Changed mt-40 to mt-0 */}
        <div>
          <img src={assets.logoN} className="mb-5 w-32 rounded-full" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Join our community and explore the best in cosmetics.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500">
                About us
              </Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-pink-500">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/Cart" className="hover:text-pink-500">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="flex items-center">
              <FaPhone className="text-pink-500 mr-2" />
              <a
                href="tel:+251983290551"
                className="text-gray-600 hover:text-pink-500"
              >
                +251-983-29-05-51
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-pink-500 mr-2" />
              <a
                href="mailto:zekiyatash2009@gmail.com"
                className="text-gray-600 hover:text-pink-500"
              >
                zekiyatash2009@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center bg-pink-200 border-pink-100 shadow-lg">
          Copyright 2025@ - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
