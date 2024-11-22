import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PrdCard from "./components/PrdCard.jsx";
import Hero from "./components/Hero.jsx";
import Flashsale from "./components/Flashsale.jsx";
import Product from "./components/Product.jsx"

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="w-full h-px bg-slate-400 my-4" />
      <Hero />
      {/* <PrdCard /> */}
      {/* <Flashsale /> */}
      <Product />
    </>
  );
}

export default App;
