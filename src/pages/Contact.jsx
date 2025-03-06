import Title from "../components/Title";
import { assets } from "../assets/assets";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons from react-icons

const Contact = () => {
  return (
    <div className=" py-12">
      <div className="text-center text-2xl pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 max-w-6xl mx-auto px-4">
        {/* Left Side: Contact Image */}
        <img
          className="w-full md:max-w-[500px] rounded-lg shadow-lg" // Reduced image size
          src={assets.contact}
          alt="Contact Us"
        />

        {/* Right Side: Contact Information */}
        <div className="flex flex-col justify-center items-start gap-6 bg-white p-6 rounded-lg shadow-lg w-full md:max-w-[500px]">
          {" "}
          {/* Adjusted width and padding */}
          <p className="font-semibold text-2xl text-gray-800">Our Store</p>
          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-500 text-xl" />
            <p className="text-gray-600">
              piyasa <br /> Ethiopia, A.A
            </p>
          </div>
          {/* Phone Number */}
          <div className="flex items-center gap-4">
            <FaPhone className="text-pink-500 text-xl" />
            <a
              href="tel:+251983290551"
              className="text-pink-500 hover:underline"
            >
              (+251) 9-83-29-05-51
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-xl" />
            <a
              href="mailto:zekiyatatsh2009@gmail.com"
              className="text-pink-500 hover:underline"
            >
              zekiyatatsh2009@gmail.com
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
