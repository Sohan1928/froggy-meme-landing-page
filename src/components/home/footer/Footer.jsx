// const Footer = () => {
//   return (
//     <div className="relative h-[650px] pt-36">
//       <div className="mx-auto">
//         <img
//           className="absolute -top-[55px] left-[135px] w-[1200px]"
//           src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738085463/g72fzbknjyeoux0r1mxt.png"
//           alt=""
//         />
//       </div>
//       <div className="absolute bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738085901/mpvhw0hrw6tobzqrqilk.png')] opacity-70"></div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="relative md:h-[600px] pt-36">
      <div className="mx-auto">
        <img
          className="absolute -top-[32px] md:-top-[55px] left-[50px] md:left-[135px] w-[220px] md:w-[1200px]"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738085463/g72fzbknjyeoux0r1mxt.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="absolute bottom-0"
          src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738086295/cvgo5hlospjtjnkte54b.png"
          alt=""
        />
      </div>

      {/* Background image at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-[url('http://res.cloudinary.com/du0uabbwo/image/upload/v1738085901/mpvhw0hrw6tobzqrqilk.png')] bg-cover opacity-50"></div>
    </div>
  );
};

export default Footer;
