import React from "react";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

function Card({ data }) {
  console.log(data);
  const { id, name, price, discount, image, details } = data;
  console.log(discount);

  return (
    <div className="flex flex-col w-67.5 shadow-2xl p-3 mb-10 rounded-xl relative">
      <img className="w-full h-61 rounded-md" src={image} alt={name} />
      <div className="flex items-center justify-between mt-3">
        <h4 className="text-orange-500 font-bold text-base">{name}</h4>
        <div className="flex items-center">
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div
        className="flex items-center justify-left
       text-gray-600 text-sm font-semibold mt-2"
      >
        <Dollar />
        {discount ? (
          <div className="text-red-500">
            {(price * (100 - discount)) / 100} $
          </div>
        ) : (
          <div>{price} $</div>
        )}
        {/* {discount === 0 ? <div>{price}</div> : <div>ممممم</div>} */}

        {discount ? (
          <div className="bg-red-500 text-white p-1 rounded-md border-2 border-white absolute top-4 left-4">
            {discount} %{" "}
          </div>
        ) : null}
      </div>
      <Link
        className="bg-orange-600 text-white block w-full text-center border border-orange-600
                          mt-5 py-1.5 px-0 rounded-md hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600"
        href={`/menu/${id}`}
      >
        See Details
      </Link>
    </div>
  );
}

export default Card;
