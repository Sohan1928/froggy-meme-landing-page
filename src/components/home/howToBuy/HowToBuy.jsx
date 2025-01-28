const HowToBuy = () => {
  return (
    <div className="chewyFont mt-8 mx-2 md:mx-[160px]">
      <div>
        <div>
          {/* <h1 className="text-black bg-[#10FF10] text-2xl md:text-[80px]  font-semibold text-center">
            How To Buy
          </h1> */}
          <h1 className="text-[#10FF10] text-2xl md:text-[80px] font-semibold text-center drop-shadow-[4px_4px_0px_#000] drop-shadow-black">
            How To Buy
          </h1>
        </div>
        <div className="md:flex items-stretch space-y-2 md:space-y-0 gap-6">
          <div className="border border-black px-8 py-8 md:shadow-[4px_4px_0px_#000] rounded-[60px] flex-1 flex flex-col items-center justify-center bg-[#B1E8BF]">
            <img
              className="size-16"
              src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738074263/pmkxnmnmmxpjv5l7v5ne.png"
              alt=""
            />
            <h4 className="text-white uppercase text-lg md:text-2xl font-bold mt-4">
              Download wallet
            </h4>
            <p className="font-semibold text-center mt-2">
              Download MetaMask or your preferred wallet from the App Store. If
              you are on a desktop, download the Google Chrome extension by
              visiting{" "}
              <span className="text-blue-700 underline">metamask.io.</span>
            </p>
          </div>

          <div className="border border-black px-8 py-8 md:shadow-[4px_4px_0px_#000] rounded-[60px] flex-1 flex flex-col items-center justify-center bg-[#B1E8BF]">
            <img
              className="size-16"
              src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738074913/yzthwcykdypkawadbchk.png"
              alt=""
            />
            <h4 className="text-white uppercase text-lg md:text-2xl font-bold mt-4">
              Get some eth
            </h4>
            <p className="font-semibold text-center mt-2">
              Send some ETH on the base network to switch to FROGGY. You can buy
              ETH through centralized exchanges.
            </p>
          </div>

          <div className="border border-black px-8 py-8 md:shadow-[4px_4px_0px_#000] rounded-[60px] flex-1 flex flex-col items-center justify-center bg-[#B1E8BF]">
            <img
              className="size-16"
              src="http://res.cloudinary.com/du0uabbwo/image/upload/v1738074933/b4xhoagzlwolksmwzvzu.png"
              alt=""
            />
            <h4 className="text-white uppercase text-lg md:text-2xl font-bold mt-4">
              Switch eth $FROGGY
            </h4>
            <p className="font-semibold text-center mt-2">
              Go to Uniswap and add the official FROGGY contract. Then switch
              $ETH to FROGGY.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
