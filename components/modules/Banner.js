import React from "react";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col-reverse mx-8 md:mx-0 sm:flex-row items-center">
      <div className="flex flex-col mt-3">
        <h2 className="border-b-orange-500 font-bold text-xl border-b-4 w-fit my-5">RohaFood</h2>
        <p className="font-medium my-4 mx-0">Food Delivery and Takeout!</p>
        <span className="text-gray-600 text-justify w-3/4">
          RohaFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivery by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link className="bg-orange-500 py-3 px-8 w-fit mt-8 rounded hover:bg-yellow-300" href="/menu"><span className="text-white">See All</span></Link>
      </div>
      <div className="w-100 sm:w-200">
        <img  src="/images/banner.png" alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
