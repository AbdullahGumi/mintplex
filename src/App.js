import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MintplexStats from "./components/MintplexStats";
import Partners from "./components/Partners";
import Recipes from "./components/Recipes";
import WhoIsMintplex from "./components/WhoIsMintplex";
import WhyMintplex from "./components/WhyMintplex";

function App() {
  return (
    <main className="font-mono bg-white relative  h-screen z-0 overflow-scroll">
      <Header />
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
}

export default App;
