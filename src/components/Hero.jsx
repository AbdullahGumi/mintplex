const Hero = () => {
  return (
    <section
      style={{
        height: "70vh",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "50% center",
        backgroundImage:
          'url("https://mintplex.xyz/static/media/patterntop.26c3d3de.svg")',
      }}
    >
      <div className="flex relative items-center">
        <div className="container mx-auto  px-6 flex flex-col justify-between items-center relative my-20">
          <div className="flex flex-col">
            <h1 className="font-ff text-4xl md:text-5xl mb-6 w-full md:w-2/3 mx-auto text-center font-bold text-gray-800">
              Build better NFT communities without code.
            </h1>
            <p className="text-lg md:text-md text-center text-gray-600 w-full md:w-2/3 mx-auto">
              Mintplex has all the tools to help you launch and grow your NFT
              project from the very first mint &amp; beyond.
            </p>
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="text-center w-full space-x-8 items-center justify-center">
                <button className="py-4 my-2 text-lg px-4 mt-6 bg-white text-[#344887] hover:text-white font-regular rounded-lg shadow-md  hover:bg-[#344887] border-2 border-[#344887]">
                  Dashboard →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
