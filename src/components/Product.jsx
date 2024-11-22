import axios from "axios";
import { useEffect, useState } from "react";
import PrdCard from "./PrdCard";
import notfound from "../assets/images/notfound.png";

export default function Product() {
  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState([]);

  const getProductdata = async () => {
    const response = await axios(API_KEY);

    setProducts(response?.data?.products);
  };

  useEffect(() => {
    getProductdata();
  }, []);
  const [search, setsearch] = useState("");

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    return result;
  };

  const searchValue = searchProducts();

  return (
    <>
      <div className="flex justify-center">
        <input
          type="search"
          name="price"
          id="price"
          onChange={(event) => {
            setsearch(event.target.value);
          }}
          className="block w-3/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 my-8 sm:text-sm/6"
          placeholder="Search your product"
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center pt-5 ">
        {searchValue.length === 0 ? (
          <div className="min-h-screen flex items-center justify-center">
            <img src={notfound} alt="img" className="bg-transparent" />
          </div>
        ) : (
          ""
        )}
        {searchValue.map((item) => (
          <PrdCard
            key={item.id}
            image={item.thumbnail}
            detail={item.title}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}
