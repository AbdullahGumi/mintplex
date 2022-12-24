const MintplexStats = () => {
  return (
    <section className="w-full flex bg-[#cd9696]">
      <div className="flex flex-col space-y-4 py-4 mx-4 md:mx-14 w-full">
        <h2 className="font-ff text-5xl text-center font-bold text-white pb-0 mb-0">
          How is Mintplex doing?
        </h2>
        <p className="font-base text-center text-white w-full md:w-1/2 mx-auto leading-tight">
          We are continously adding new tools and functionality to Mintplex. The
          best time to start is today.
        </p>
        <div className="flex flex-wrap w-fit gap-10 justify-center md:justify-between mx-auto items-center py-4">
          <div className="flex flex-col space-y-2 justify-center">
            <p className="text-center text-5xl font-ff text-white font-black">
              $8.1M+
            </p>
            <p className="text-center text-white">earned for creators</p>
          </div>
          <div className="flex flex-col space-y-2 justify-center">
            <p className="text-center text-5xl font-ff text-white font-black">
              1000+
            </p>
            <p className="text-center text-white">communities launched</p>
          </div>
          <div className="flex flex-col space-y-2 justify-center">
            <p className="text-center text-5xl font-ff text-white font-black">
              1.4M+
            </p>
            <p className="text-center text-white">NFT's minted with Mintplex</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintplexStats;
