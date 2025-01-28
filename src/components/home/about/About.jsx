import { FaTelegramPlane } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative">
      <img
        className="w-[1200px] mx-auto"
        src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738057537/hwfdmg38robduxktlfm6.png"
        alt=""
      />

      <div className="md:px-64 absolute top-0 md:left-0 w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-center mx-auto gap-8">
          <div className="w-1/2 chewyFont uppercase text-white">
            <h1 className="text-xl md:text-7xl mb-4 font-semibold ">About</h1>
            <p className="md:text-xl text-[12px]">
              FROGGY08 isn’t just another meme coin; it’s a community-driven
              cryptocurrency built on humor, inclusivity, and the love for all
              things froggy! With 0% tax, an 8% reward pool, and endless croaks
              of joy, we’re here to make crypto fun again!
            </p>
            <button className="md:chewyFont md:uppercase mt-4 flex items-center text-[12px] md:text-lg px-1 md:justify-center py-2 md:px-6 md:py-4 bg-pink-600 border-2 border-black text-white rounded-md font-bold md:shadow-[4px_4px_0px_#000]">
              Join out community
              <span className="md:ml-2">
                <FaTelegramPlane className="size-6"></FaTelegramPlane>
              </span>
            </button>
          </div>
          <div>
            <img
              className="md:w-[480px] md:h-[488px] "
              src="Ellipse 23.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
