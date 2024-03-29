import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="h-16 md:h-20 flex items-center z-30 w-full overflow-visible border-b-2 border-gray-100">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className=" flex gap-x-6 items-center">
          <a href="/">
            <img
              src="https://mintplex.xyz/static/media/mintplex-logo-dark.a6e989bc.svg"
              alt="mintplex.xyz"
              className="h-10"
            />
          </a>
          <a
            href="https://twitter.com/mintplexnft/status/1603589091043332096"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="flex gap-x-2 items-center hover:bg-gray-50 rounded-lg p-2">
              <p className="text-2xl">🎉</p>
              <div className=" flex flex-col">
                <p className="text-gray-500 text-sm">
                  Mintplex Pro now only <b>$12.00 per month</b>!
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex items-center">
          <nav className="text-gray-800  text-md lg:flex space-x-8 items-center hidden">
            <a
              href="https://trusting-lungfish-ebb.notion.site/Mintplex-FAQ-s-91f5d2700d764031a44c064ed49f8aec"
              target="_blank"
              rel="noreferrer"
            >
              FAQ
            </a>
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => setMenu(!menu)}
                  className="py-1 flex text-gray-800  border-b border-white hover:border-gray-200"
                >
                  Tools
                </button>
                {menu && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    style={{ zIndex: 10 }}
                  >
                    <div className="py-1 ">
                      <a
                        href="https://nft-inator.com/?ref=mintplex.xyz"
                        rel="noreferrer"
                        target="_blank"
                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                      >
                        <span className="flex flex-col">
                          <span>No-Code NFT Generator</span>
                        </span>
                      </a>
                      <a
                        href="https://mintplex.xyz/tools/metadata-maker"
                        className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                      >
                        <span className="flex flex-col">
                          <span>Metadata Editor</span>
                        </span>
                      </a>
                      <a
                        href="https://mintplex.xyz/tools/opensea-bulk-refresh"
                        className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                      >
                        <span className="flex flex-col">
                          <span>OS Bulk Image Refresh</span>
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <a
              href="https://twitter.com/@mintplexnft"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <button className="py-1 px-2 flex text-[#344887] hover:text-white border-2 border-[#344887] rounded-md hover:bg-[#344887]">
              Dashboard
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
