import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrdCard from "./PrdCard";

import useProduct from "../Hooks/useProducts";

export default function Slider() {
  const { products, error } = useProduct("limit=7&skip=50");

  if (error) return <div>Error loading products</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <Swiper
      className="pt-6"
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation, Scrollbar, Autoplay, A11y]}
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation
    >
      {products?.slice(0, 7).map((item) => (
        <SwiperSlide key={item.id}>
          <div id="product-container" className="flex gap-4">
            <PrdCard
              id={item.id}
              productimage={item.thumbnail}
              discount={Math.round(item.discountPercentage)}
              productname={item.title}
              sale={item.price}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
