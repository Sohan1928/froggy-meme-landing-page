const CustomButton = () => {
  return (
    <div>
      <button className="md:chewyFont md:uppercase md:relative flex items-center text-[12px] md:text-lg px-1 md:justify-center py-2 md:px-6 md:py-4 bg-pink-600 border-2 border-black text-white rounded-md font-bold md:shadow-[4px_4px_0px_#000]">
        Buy $froggy now
        <span className="md:ml-2">
          <img
            src="http://res.cloudinary.com/du0uabbwo/image/upload/v1737996993/xcivhuf4whzrzt3yvnsg.png"
            alt="froggy"
            className="h-4 w-4 md:h-6 md:w-6"
          />
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
