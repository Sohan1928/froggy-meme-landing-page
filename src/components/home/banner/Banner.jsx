import CustomButton from "../customItem/CustomButton";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="relative">
      <div className="md:flex items-center px-8 gap-6 pb-8">
        <div>
          <img
            className="md:w-[600px]"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738001763/tjwxnaatdthfxgp6k4q1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="mt-8 md:mt-0 md:w-[600px]"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738001832/svngi3iq9jsbfcijhlf3.png"
            alt=""
          />
          <h1 className="md:text-4xl md:mt-4 text-black font-bold chewyFont">
            The croakiest meme coin that’s making <br /> waves in the blockchain
            pond.
          </h1>
          <div className="mt-8 flex items-center gap-4 md:gap-6">
            <CustomButton></CustomButton>
            <div className="md:uppercase md:relative flex items-center md:justify-center py-2 px-2 md:py-4 md:h-16 md:w-16 bg-pink-600 border-2 border-black text-white rounded-md md:shadow-[4px_4px_0px_#000]">
              <FaTelegramPlane className="size-4.5 md:size-8"></FaTelegramPlane>
            </div>
            <div className="md:uppercase md:relative flex items-center md:justify-center py-2 px-2 md:py-4 md:h-16 md:w-16 bg-pink-600 border-2 border-black text-white rounded-md md:shadow-[4px_4px_0px_#000]">
              <FaXTwitter className="size-4.5 md:size-8"></FaXTwitter>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-[100px] md:h-[200px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738003737/nre3se0ijh3xdladzd4r.png')] bg-cover bg-center opacity-40"></div>

      <div className="absolute md:-bottom-[250px] left-0 right-0 md:h-[120px] bg-white bg-cover bg-center opacity-15"></div>
      <div className="absolute md:-bottom-[590px] left-0 right-0 md:h-[120px] bg-white bg-cover bg-center opacity-15"></div>
    </div>
  );
};

export default Banner;
