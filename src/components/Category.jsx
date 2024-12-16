import React from "react";
import cellphone from "../assets/images/cellphone.png";
import camera from "../assets/images/camera.png"
import computer from "../assets/images/computer.png"
import gamePad from "../assets/images/gamePad.png"
import headphone from "../assets/images/headphone.png"
import smartwatch from "../assets/images/smartwatch.png"
import arrows from "../assets/images/arrows.png"
import Enhancer from "../assets/images/enhance.png"

// export default function Category() {
//   return (
//     <div className="flex flex-col gap-4" id="main">
//       <div className="flex gap-5 items-center">
//         <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
//         <div className="text-[#DB4444] font-semibold"> Categories </div>
//       </div>

//       <h1 className="font-semibold text-4xl gap-24 items-end">
//         Browse By Category
//       </h1>

//       <div id="pictures">
//         <div className="border center w-[170px] h-36  rounded-md">
//           <div>
//             <img src={cellphone} alt="img" />
//             <span className="font-normal text-base flex flex-col">Phones</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


const categories = [
  { name: "Phones", image: cellphone },
  { name: "Computers", image: computer },
  { name: "Camera", image: camera },
  { name: "Headphones", image: headphone },
  { name: "Watch", image: smartwatch },
  { name: "GamePad", image: gamePad },
];
export default function Category() {
  return (
    <div className="flex flex-col gap-8" id="main">
      {/* Header */}
      <div className="flex gap-5 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <div className="text-[#DB4444] font-semibold">Categories</div>
      </div>
      <div className="flex justify-between">
      <h1 className="font-semibold text-4xl">Browse By Category</h1>
      <img src={arrows} alt="img" />

      </div>


      {/* Categories */}
      <div id="pictures" className="flex gap-4">
        {categories.map((Category, index) => (
          <div
            key={index}
            className="border flex flex-col items-center justify-center w-[170px] h-36 rounded-md"
          >
            <img
              src={Category.image}
              alt={Category.name}
              className="w-16 h-16"
            />
            <span className="font-normal text-base">{Category.name}</span>
          </div>
        ))}
      </div>
      <hr />
      <div id="Enhancer img div">
        <img src={Enhancer} alt="img" />

      </div>
    </div>
  );
}
