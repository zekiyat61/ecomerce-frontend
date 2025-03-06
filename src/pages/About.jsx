import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] shadow-lg"
          src={assets.about}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 ">
          <p>
            At Zeku Cosmetics, we celebrate beauty and individuality with our
            premium range of mascaras, powders, foundations, and lipsticks. Our
            mission is to empower everyone to express their unique style with
            confidence.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 shadow-lg rounded-lg overflow-hidden">
        {/* Fast Add to Cart Section */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white hover:bg-gray-50 transition duration-300 flex-1">
          <b className="text-pink-500 text-lg">Fast Add to Cart</b>
          <p className="text-gray-600">
            Quickly add items to your cart and continue shopping without any
            delays.
          </p>
        </div>

        {/* No Payment Method Required Section */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white hover:bg-gray-50 transition duration-300 flex-1">
          <b className="text-pink-500 text-lg">No Payment Method Required</b>
          <p className="text-gray-600">
            Enjoy a hassle-free shopping experience with no immediate payment
            required.
          </p>
        </div>

        {/* Easy Cart Management Section */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white hover:bg-gray-50 transition duration-300 flex-1">
          <b className="text-pink-500 text-lg">Easy Cart Management</b>
          <p className="text-gray-600">
            Add, remove, or update items in your cart effortlessly with our
            intuitive cart management system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
