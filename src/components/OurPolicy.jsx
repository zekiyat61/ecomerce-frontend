import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold mb-0">Easy Exchange Policy</p>{" "}
        {/* Added mb-0 */}
        <p className="text-gray-400 mb-0">
          We offer hassle-free exchange policy
        </p>{" "}
        {/* Added mb-0 */}
      </div>

      <div>
        <img src={assets.quality} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold mb-0">7 Days Return Policy</p>{" "}
        {/* Added mb-0 */}
        <p className="text-gray-400 mb-0">
          We provide 7 days free return policy
        </p>{" "}
        {/* Added mb-0 */}
      </div>
    </div>
  );
};

export default OurPolicy;
