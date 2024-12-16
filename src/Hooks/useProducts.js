import axios from "axios";
import { useEffect, useState } from "react";

export default function useProduct() {
  const API_KEY = `https://dummyjson.com/products?limit=7&skip=50`;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(API_KEY);
      setProducts(response?.data?.products);
      setIsLoading(false);
    } catch (error) {
      setError(
        error?.response?.statusText || "Unknown error, please try again"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return {
    products: products,
    isLoading: isLoading,
    error: error,
  };
}
