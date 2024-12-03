import React from 'react'
import { Link} from "react-router-dom";


export default function Button() {
  return (
    <Link  className="font-medium rounded bg-red-500 center text-white h-14 w-56 mx-auto my-16"
    to={'/product'}> View All Product</Link>
  )
}
