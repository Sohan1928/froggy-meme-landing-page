const OurRoadMap = () => {
  return (
    <div className="py-24 relative">
      <div>
        <img
          className="flex flex-col items-center justify-center mx-auto h-8 md:h-20"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738083060/mze20yayvd1dhgjwx3jc.png"
          alt=""
        />
      </div>
      <div className="absolute right-[0px] -top-[10px] md:-top-[220px]">
        <img
          className="h-[150px] md:h-[550px]"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738083824/g9b3rl7zg2j03qrz6soc.png"
          alt=""
        />
      </div>
      <div className="absolute left-1 md:left-6 top-[180px]">
        <img
          className="h-[120px] md:h-[550px]"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738084488/gnf17mlpwnaodkapgeix.png"
          alt=""
        />
      </div>
      <div className="absolute right-0 top-[230px] md:top-[480px]">
        <img
          className="h-[80px] md:h-[250px]"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738083824/g9b3rl7zg2j03qrz6soc.png"
          alt=""
        />
      </div>
      <div className="pt-16">
        <img
          className="md:h-[1050px]"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738084703/pacu4dp2laxgov7rmtzp.png"
          alt=""
        />
      </div>

      {/* <img
        src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738084992/aordhx4nvkctgrhcunir.png"
        alt=""
      /> */}
      <div className="absolute -bottom-2 md:-bottom-24 left-0 right-0 h-[100px] md:h-[200px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738084992/aordhx4nvkctgrhcunir.png')] bg-cover bg-center opacity-100"></div>
    </div>
  );
};

export default OurRoadMap;
