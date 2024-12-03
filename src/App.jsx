import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Button from "./components/Button"
import Product from "./components/Product";
import Footer from "./components/Footer";

// import PrdCard from "./components/PrdCard.jsx";
// import Hero from "./components/Hero.jsx";
// import Flashsale from "./components/Flashsale.jsx";
// import Product from "./components/Product.jsx"

function App() {
  const isLoggedIn = true;
  return (
    <>
      <Banner />
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />


        {isLoggedIn ? (
          <>
            <Route
              path="/profile"
              element={<div>this is my profile page</div>}
            />

            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <Footer />
      {/* <Hero /> */}
      {/* <div className="w-full h-px bg-slate-400 my-4" /> */}
      {/* <PrdCard /> */}
      {/* <Flashsale /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;
