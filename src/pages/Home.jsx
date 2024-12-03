import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Flashsale from "../components/Flashsale";
import PrdCard from "../components/PrdCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Flashsale />
      <Product />
      <Button />
    </div>
  );
}
