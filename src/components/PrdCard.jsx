import cardimages from "../assets/cardimages/cards.jpg";
import star from "../assets/cardimages/Frame.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PrdCard(Props) {
  return (
    <Link to={`/product/${Props.id}`} className="w-64 relative bdr rounded-2xl">
      <div className="bg-[#F5F5F5] ">
        <div className="flex justify-between mb-3">
          <div className="bg-red-500 text-white  rounded w-14 h-7 text-center ml-3 mt-3">
            <p>-{Props.discount}%</p>
          </div>

          <div className="text-end  mr-3 mt-3 flex flex-col gap-3">
            <div>
              <IoMdHeartEmpty className="text-xl" />
            </div>

            <div>
              <FaRegEye className="text-xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-48 h-48 m-auto mb-6">
          <img
            src={Props.productimage}
            alt="img"
            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <div className="pl-2">
        <h1 className="pt-2 pb-2">{Props.productname}</h1>
        <p className="text-red-600 ">${Props.sale}</p>
        <img src={star} alt="" className="pt-1 pb-1" />
      </div>
    </Link>
  );
}

// export default function PrdCard(props) {
//   return (
//     <div className="p-3 flex flex-wrap justify-around">
//       <Wcard
//         productimage={props.image}
//         discount={-35}
//         productname={props.detail}
//         sale={props.price}
//       />
{
  /* 
      <Wcard
        productimage={props.image}
        discount={-35}
        productdetail={"HAVIT HV-G92 Gamepad"}
        sale={890}
      />

      <Wcard
        productimage={props.image}
        discount={-35}
        productdetail={"HAVIT HV-G92 Gamepad"}
        sale={890}
      />

      <Wcard
        productimage={cardimages}
        discount={-35}
        productdetail={"HAVIT HV-G92 Gamepad"}
        sale={890}
      /> */
}
// </div>
//   )
// }
