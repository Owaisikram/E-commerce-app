import iphone from "../assets/images/iphoneimg.png"
export default function Hero() {
  return (
    <div id=",maindiv" className="flex justify-around">
      <div className=" w-56 border-r-2 border-gray-300 ">
        <ul className="list-none space-y-3">
          <li>Woman’s Fashion</li>
          <li>Men’s Fashion</li>
          <li>Electronics </li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      <div id="imagewaladiv">
        <img className="" src={iphone} alt="img" />
      </div>
    </div>
  );
}
