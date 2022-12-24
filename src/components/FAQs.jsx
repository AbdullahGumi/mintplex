import React, { useState } from "react";

const questions = [
  {
    question: "Why use Mintplex over OpenSea, Rarible, or Foundation?",
    answer:
      "Did you know that when you mint on a marketplace you don't actually own your token? Your NFT is minted under the marketplace's smart contract and typically cannot be traded on another marketplace! With Mintplex your NFT is governed by its own smart contract - so it can go anywhere!",
  },
  {
    question: "Why use Mintplex over OpenSea, Rarible, or Foundation? Cont.",
    answer:
      "Unlike direct to marketplace uploads, you can launch HUGE projects with Mintplex. 10 or 10,000 images - its all the same to us and our contracts are compatible with other marketplaces!",
  },
  {
    question: "Who is hosting my images?",
    answer:
      "Well, that is up to you! When you use Mintplex we will walk you through all the steps to make sure it works! We recommend Pinata.cloud",
  },
  {
    question: "I don't know how to code - does that matter?",
    answer:
      "When you use Mintplex you will never write a line of code. We generate your smart contract code, but you deploy and own it. We just provide the service for you to get your project live without hiring developers! Once you are live on mainnet you can verify your contract to build trust with your community.",
  },
  {
    question: "What features can my smart contract have?",
    answer:
      "Mintplex contracts can come with Allowlisting, Mint Fees, Start/Stopping Mint, Token Caps, and Royalty + Mint Fee Sharing with your team by %",
  },
  {
    question: "What does it cost to use Mintplex?",
    answer:
      "Mintplex charges NO fees on primary or secondary sales of your NFTs. Mintplex makes money from the additional tools that we provide that help ensure your projects success. All mint earnings are split among your team - or just you ;).",
  },
  {
    question: "Can I use Mintplex for Music NFTs?",
    answer:
      "Yes, we support mp3 NFTs. You will need a placeholder image for your album art, but it's all the same for us!",
  },
  {
    question: "What chains and tokens are supported?",
    answer:
      "Right now, Ethereum, Polygon, Optimism, Arbitrum, Avalanche, and BNB Smart Chain are supported. Our contracts create ERC-721A & ERC-1155 compliant tokens. We will be supporting Flow, Stacks, and other protocols in the future.",
  },
];

const FAQs = () => {
  const [showAnswer, setShowAnswerAtInedx] = useState([]);

  return (
    <section
      id="faq"
      className="py-4 px-2 border-t border-b border-color-gray-100"
    >
      <div className="flex-col space-y-2 py-4">
        <h2 className="font-ff text-3xl md:text-5xl text-center font-bold text-gray-800">
          Questions?
          <br />
          We have answers for you!
        </h2>
        <p className="text-gray-500 text-base text-center">
          Mintplex is changing the NFT space so we prepared some questions and
          answers you might have.
        </p>
      </div>
      <dl className="w-full md:w-1/2 mx-auto px-2 md:px-0">
        {questions.map(({ question, answer }, index) => (
          <div
            key={answer}
            onClick={() => {
              if (!showAnswer.includes(index)) {
                setShowAnswerAtInedx(showAnswer.concat(index));
              } else {
                setShowAnswerAtInedx(
                  showAnswer.filter((item) => item !== index)
                );
              }
            }}
            className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-[#d15946] ">
              {question}
            </h3>
            {showAnswer.includes(index) && (
              <p class="text-gray-500 mt-8"> {answer}</p>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
};

export default FAQs;
