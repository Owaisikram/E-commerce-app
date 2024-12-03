import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = false;
  return (
    //logo and input Here..
    <div className="h-28 flex justify-around items-center">
      <img src={logo} alt="logo" />

      <div className="border-red-500 rounded center w-60 h-10 bg-[#f5f5f5] px-3 font-sm">
        <input
          className="outline-none text-sm bg-transparent w-full"
          type="search"
          placeholder="What are you looking for?"
        />

        <CiSearch className="text-3xl" />
      </div>

      <ul className="flex gap-4">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/About">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/Contact">Contact Us</Link>
        </li>
        {!isLoggedIn ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : null}
      </ul>

      <div className="flex text-3xl center gap-3 ">
        {isLoggedIn ? (
          <>
            <CiHeart />
            <PiShoppingCart />
          </>
        ) : (
          <FaRegUser className="w-7 h-7 bg-red-500 rounded-full px-2 text-white" />
        )}
      </div>
    </div>
  );
}
