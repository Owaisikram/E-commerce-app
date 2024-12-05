import imgtime from "../assets/images/timeimage.png"
export default function Flashsale() {
  return (
    <div id="main">
      <div className="flex gap-5 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <div className="text-[#DB4444] font-semibold"> Today's</div>
      </div>

      <div className=" h-14 flex gap-24 items-end " id="timewala div">
      <h1 className="font-semibold text-4xl">Flash Sales</h1>
      <img src={imgtime} alt="img" />
      </div>
    </div>
  );
}
