import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route, Outlet, Link,Navigate } from "react-router-dom";
import Contact from "./pages/Contact";

// import PrdCard from "./components/PrdCard.jsx";
// import Hero from "./components/Hero.jsx";
// import Flashsale from "./components/Flashsale.jsx";
// import Product from "./components/Product.jsx"

function App() {
 const  isLoggedIn = true;
  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />

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
      {/* <Hero /> */}
      {/* <div className="w-full h-px bg-slate-400 my-4" /> */}
      {/* <PrdCard /> */}
      {/* <Flashsale /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;
