import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 shadow-lg rounded-lg">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <h1 className="prata-regular text-pink-400 text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sky-400 text-sm md:text-base ">
              SHOP NOW
            </p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
        className="w-full sm:w-1/2 h-[500px] object-cover shadow-lg rounded-lg"
        src={assets.hero}
      />
    </div>
  );
};

export default Hero;
