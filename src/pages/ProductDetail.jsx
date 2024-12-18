import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { formatDistanceToNow } from "date-fns";
import { IoMdHeartEmpty } from "react-icons/io";
import imgofdelivery from "../assets/images/freedelivery.png";

export default function ProductDetail() {
  const params = useParams();
  // https://dummyjson.com/products/12
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );

  const product = data?.data;

  const [selectedImage, setSelectedImage] = useState(null);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(product?.minimumOrderQuantity);
  }, [data]);

  if (isLoading) return "loading...";
  // console.log("prodcut",data);

  return (
    <>
      <main className="container-x">
        <div className=" product flex min-h-[600px] flex-col md:flex-row">
          <div className="images bg-[#F5F5F5] pl-3 flex md:w-[75%]">
            {product?.images?.length > 1 ? (
              <div className="w-[150px] borde h-full p-3  flex flex-col gap-3">
                {product?.images.map((image, i) => (
                  <div className="max-w-sm mx-auto">
                    <img
                      key={i}
                      src={image}
                      alt="img"
                      className="borde w-40 h-32 bg-[#F5F5F5]  shadow-[0_4px_10px_rgba(0,0,0,0.7)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.8)] transition-shadow duration-300"
                      onMouseOver={() => setSelectedImage(image)}
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <div className="">
              <img
                className="w-[500px] h-[450px] "
                src={selectedImage || product?.images[0]}
                alt=""
              />
            </div>
          </div>

          <div className="product-data md:w-[45%] pl-4 flex flex-col gap-3">
            <h2 className="font-medium text-xl">{product?.title}</h2>
            <div className="flex gap-2">
              <p>({product?.rating} Reviews)</p>
              <p className="text-gray-700 ml-2">|</p>
              <p>
                {product?.stock ? (
                  <span className="text-[#00FF66]">In Stock </span>
                ) : (
                  <span className="text-red-600">Out of Stock </span>
                )}
              </p>
            </div>
            <span className="w-[400px] text-xl">
              ${Math.round(product?.price * quantity || 0)}
            </span>
            <p className="  text-xs">{product?.description}</p>

            <hr />

            <div className="flex gap-3 items-center mt-4 lg:mt-5">
              <div className="w-32 sm:w-40 md:w-32 lg:w-40 h-10 sm:h-11 md:h-10 lg:h-11 border border-gray-400 rounded flex ">
                <button
                  className=" w-[40%] text-3xl border-r border-r-gray-600"
                  onClick={() => {
                    if (quantity <= 1) return;
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p className=" w-[50%] text-center text-xl font-medium pt-2 ">
                  {quantity}
                </p>
                <button
                  className="w-[40%]  text-3xl border-l border-l-gray-600"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:border-r-indigo-950 focus:ring-opacity-75 transition duration-500">
                Buy Now
              </button>

              <IoMdHeartEmpty className=" hover:text-red-500 transition duration-300 text-4xl" />
            </div>
            <img className="pt-4" src={imgofdelivery} alt="" />
          </div>
        </div>

        <div className="reviews flex flex-col gap-4 w-full p-4">
          {product?.reviews?.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-4 shadow-md border border-gray-200"
            >
              {/* Reviewer Name and Date */}
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-semibold text-gray-800">
                  {review.reviewerName}
                </h5>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(review.date, { addSuffix: true })}
                </span>
              </div>

              {/* Review Comment */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
