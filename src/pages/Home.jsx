import { Link } from "react-router-dom";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Flashsale from "../components/Flashsale";
import PrdCard from "../components/PrdCard";
import Slider from "../components/Slider";
import Category from "../components/Category";
import NewArrivalGrid from "../components/NewArrivalGrid";

export default function Home() {
  return (
    <div className="container-x">
      <Hero />
      <Flashsale />
      <Slider />
      {/* <Product /> */}
      <Button />
      <Category />
      <NewArrivalGrid/>
    </div>
  );
}
