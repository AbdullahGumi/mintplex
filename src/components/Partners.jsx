import Marquee from "react-fast-marquee";

const Partners = () => {
  const partnersAndFriends = [
    {
      href: "https://bit.ly/3wKprej",
      src: "https://mintplex.xyz/static/media/pinata.9dc28dc0.svg",
    },
    {
      href: "https://typedream.com/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/typedream.40e6e4e3.svg",
    },
    {
      href: "https://www.alchemy.com/",
      src: "https://mintplex.xyz/static/media/alchemy.ec491ba0.svg",
    },
    {
      href: "https://qx.app/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/quixotic.dbe50c04.svg",
    },
    {
      href: "https://stratosnft.io/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/stratos.62e79e8e.svg",
    },
    {
      href: "https://simplehash.com/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/simplehash.7fce8658.webp",
    },
    {
      href: "https://trybonfire.xyz/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/bonfire.71adb223.svg",
    },
    {
      href: "https://mintparty.xyz/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/mintparty.d573eb61.svg",
    },
    {
      href: "https://www.usewinter.com/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/winter.5b2adbfb.svg",
    },
    {
      href: "https://nft-inator.com/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/dhhlogo.7d2619ea.svg",
    },
    {
      href: "https://syncnetwork.io/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/SYNC.54686a27.svg",
    },
    {
      href: "https://carma.community/?ref=mintplex.xyz",
      src: "https://mintplex.xyz/static/media/carma.bae554a6.svg",
    },
  ];

  return (
    <section className="w-full border-t border-color-gray-100">
      <input type="hidden" className="w-40 w-48 w-28 w-12" />
      <div className="w-full flex flex-col items-center my-10">
        <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
          Partners and Friends
        </p>
        <section className="md:w-1/2">
          <Marquee>
            <div className="flex w-full">
              {partnersAndFriends.map(({ href, src }) => (
                <a
                  key={src}
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer mr-5"
                  style={{ width: "200px", height: "100px" }}
                >
                  <img
                    src={src}
                    alt="Mintplex Partner"
                    className={`w-48 h-auto grayscale hover:grayscale-0`}
                  />
                </a>
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" className="mt-5">
            <div className="flex w-full">
              {partnersAndFriends.map(({ href, src }) => (
                <a
                  key={src}
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer mr-5"
                  style={{ width: "200px", height: "100px" }}
                >
                  <img
                    src={src}
                    alt="Mintplex Partner"
                    className={`w-48 h-auto grayscale hover:grayscale-0`}
                  />
                </a>
              ))}
            </div>
          </Marquee>
        </section>
      </div>
      <div className="w-full flex flex-col items-center my-10 mt-20">
        <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
          Investors and Supporters
        </p>
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-row justify-center space-x-8 md:space-x-14 gap-y-8 items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ycombinator.com/companies/rampp-xyz"
            className="w-fit cursor-pointer"
          >
            <img
              src="https://mintplex.xyz/static/media/ycombinator.237b5c69.svg"
              alt="Mintplex Partner"
              className="w-60 h-auto"
              style={{ opacity: 1 }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.alchemy.com/"
            className="w-fit cursor-pointer"
          >
            <img
              src="https://mintplex.xyz/static/media/alchemy.ec491ba0.svg"
              alt="Mintplex Partner"
              className="w-60 h-auto"
              style={{ opacity: 1 }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://xcelerator.berkeley.edu/?ref=mintplex.xyz"
            className="w-fit cursor-pointer"
          >
            <img
              src="https://mintplex.xyz/static/media/bbx.fe098b18.webp"
              alt="Mintplex Partner"
              className="w-12 h-auto"
              style={{ opacity: 1 }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
