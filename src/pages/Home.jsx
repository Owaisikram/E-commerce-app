import { Link } from "react-router-dom";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Flashsale from "../components/Flashsale";
import PrdCard from "../components/PrdCard";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="container-x">
      <Hero />
      <Flashsale />
      <Slider />
      {/* <Product /> */}
      <Button />
    </div>
  );
}
