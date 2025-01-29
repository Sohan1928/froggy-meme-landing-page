const About = () => {
  return (
    <div className="relative">
      <img
        className="w-[1200px] mx-auto"
        src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738057537/hwfdmg38robduxktlfm6.png"
        alt=""
      />
      {/* <div className="absolute -bottom-2 md:bottom-64 left-0 right-0 h-[100px] md:h-[200px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738088932/gscqczikeruieorxz3cq.png')] bg-cover bg-center opacity-30"></div>

      <div className="absolute -bottom-2 md:-bottom-24 left-0 right-0 h-[100px] md:h-[200px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738088932/gscqczikeruieorxz3cq.png')] bg-cover bg-center opacity-30"></div> */}

      {/* <div className="absolute  md:bottom-44 left-8 h-[200px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738089179/cq6eftxsmmij4rdultpz.png')] opacity-100"></div>

      <div className="absolute  md:bottom-44 left-8 h-[200px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738089757/uw1iaf3gdbm384yrl4vf.png')] opacity-100"></div> */}

      <div className="md:px-64 absolute top-0 md:left-0 md:w-full md:h-full flex items-center justify-center">
        <div className="flex items-center py-2 px-4 md:px-0 md:py-0 justify-center mx-auto gap-8">
          {/* <div className="w-1/2 chewyFont uppercase text-white">
            <h1 className=" md:text-7xl mb-4 font-semibold ">About</h1>
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
          </div> */}
          <img
            className="md:size-1/2 size-2/5"
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738082435/gy4h8r6jprqfum5ymkqm.png"
            alt=""
          />
          <div className="md:w-full">
            <img
              className="h-[132px] md:w-full md:h-[488px]"
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
