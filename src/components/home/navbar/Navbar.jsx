import { useState } from "react";
import CustomButton from "../customItem/CustomButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1737998772/zvzifbjiereevzvz89t3.png')] bg-cover opacity-50"></div>

      {/* Navbar content */}
      <div className="relative flex items-center pt-8 pb-12 md:pb-24 justify-between mx-2 md:mx-12">
        {/* Logo */}
        <div className="flex items-center  text-black">
          <img
            className="h-8 w-8 md:h-14 md:w-14"
            src="Ellipse 23.png"
            alt="logo"
          />
          <h2 className="uppercase passionOneFont text-xl md:text-[32px] font-bold">
            $Froggy08
          </h2>
        </div>

        {/* Navbar links (desktop and burger menu) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full  p-4 chewyFont md:static md:w-auto md:p-0 md:flex md:items-center uppercase md:text-xl gap-2 md:gap-6 font-bold text-black z-10`}
        >
          <a href="" className="block py-2 md:py-0">
            Home
          </a>
          <a href="" className="block py-2 md:py-0">
            About
          </a>
          <a href="" className="block py-2 md:py-0">
            Tokenomics
          </a>
          <a href="" className="block py-2 md:py-0">
            Roadmap
          </a>
        </div>

        {/* Button */}
        <div className="">
          <CustomButton></CustomButton>
        </div>

        {/* Burger menu for mobile */}
        <div className="flex md:hidden">
          <button
            className="text-black text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Burger Icon */}
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
