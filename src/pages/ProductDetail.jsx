import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { formatDistanceToNow } from "date-fns";

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
      <main>
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
                      className="borde w-44 h-36 bg-[#F5F5F5]  shadow-[0_4px_10px_rgba(0,0,0,0.7)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.8)] transition-shadow duration-300"
                      onMouseOver={() => setSelectedImage(image)}
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <div className="">
              <img
                className="w-[600px] h-[550px] "
                src={selectedImage || product?.images[0]}
                alt=""
              />
            </div>
          </div>

          <div className="product-data md:w-[45%] bdr2">
            <h2 className="font-semibold text-2xl">{product?.title}</h2>
            <p className="w-[400px] text-2xl">{product?.price * quantity || 0}</p>
            quantity :
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            {quantity}
            <button
              onClick={() => {
                if (quantity < 2 || quantity <= product?.minimumOrderQuantit)
                  return;
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div className="reviews flex flex-col gap-3">
          {product?.reviews?.map((review, i) => (
            <div key={i} className="bg-slate-300 rounded-xl p-3">
              <h5>{review.reviewerName}</h5>
              <span className="text-xs text-gray-600">
                {formatDistanceToNow(review.date, { addSuffix: true })}
              </span>

              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
