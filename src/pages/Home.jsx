import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MintplexStats from "../components/MintplexStats";
import Partners from "../components/Partners";
import Recipes from "../components/Recipes";
import WhoIsMintplex from "../components/WhoIsMintplex";
import WhyMintplex from "../components/WhyMintplex";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <WhyMintplex />
      <MintplexStats />
      <WhoIsMintplex />
      <Recipes />
      <FAQs />
      <Footer />
    </main>
  );
};

export default Home;
