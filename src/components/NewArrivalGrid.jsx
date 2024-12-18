import img1 from "../assets/images/ps5.png";
import img2 from "../assets/images/women.png";
import img3 from "../assets/images/speakers.png";
import img4 from "../assets/images/Perfume.png";
import arrows from "../assets/images/arrows.png";
import guarantee from "../assets/images/guarantee.png";
import service from "../assets/images/service.png";
import delivery from "../assets/images/delivery.png";

export default function NewArrivalGrid() {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="flex gap-5 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <div className="text-[#DB4444] font-semibold">Featured</div>
      </div>

      <div className="flex justify-between">
        <h1 className="font-semibold text-4xl">Explore Our Products</h1>
        <img src={arrows} alt="img" />
      </div>

      <div className="main grid grid-cols-4 gap-8 grid-rows-2">
        <div className="bg-[#0D0D0D] relative text-gray-200 rounded col-span-2 row-span-2">
          <img
            className="object-contain w-full h-full "
            src={img1}
            alt="product image"
          />

          <div className="absolute gap-3 flex-col flex bottom-0 p-6">
            <h3 className="S_Underline font-semibold text-2xl">Women's Collections</h3>
            <p className="w-3/5 line-clamp-3">
              Featured woman collections that give you another vibe.
            </p>
            <a className="underline" href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className="relative bg-[#0D0D0D] text-gray-200 rounded col-span-2">
          <img
            className="object-contain  h-full w-full"
            src={img2}
            alt="product image"
          />

          <div className="absolute gap-3 flex-col flex bottom-0 p-6">
            <h3 className=" S_Underline font-semibold text-2xl">Women's Collections</h3>
            <p className="w-3/5 line-clamp-3">
              Featured woman collections that give you another vibe.
            </p>
            <a className="underline" href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className="bg-[#0D0D0D] relative group text-gray-200 rounded">
          <img
            className="object-contain h-full w-full"
            src={img3}
            alt="product image"
          />
          <div className="absolute gap-2 flex-col flex bottom-0 p-6">
            <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
              Speakers
            </h3>
            <p className="line-clamp-3">Amazon wireless speakers</p>
            <a className="underline" href="#">
              Shop Now
            </a>
          </div>{" "}
        </div>

        <div className="bg-black">
          <div
            style={{
              backdropFilter: "blur(300px)",
              backgroundColor: "rgba(217, 217, 217, 0.2)",
            }}
            className="bg-[#0D0D0D] h-full relative text-gray-200 rounded"
          >
            <img
              className="object-contain  h-full w-full"
              src={img4}
              alt="product image"
            />

            <div className="absolute gap-2 flex-col flex bottom-0 p-6">
              <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">Perfume</h3>
              <p className="line-clamp-3">GUCCI INTENSE OUD EDP </p>
              <a className="underline" href="#">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 center mt-9" id="bottom">
        <div><img src={guarantee} alt="img" /></div>
        <div><img src={service} alt="img" /></div>
        <div><img src={delivery} alt="img" /></div>
      </div>
    </div>
  );
}
