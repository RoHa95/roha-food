import React from "react";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

function Attribiutes() {
  return (
    <div className="mt-25 w-full">
      <h3 className="text-2xl my-6 sm:mx-0 mx-6 text-orange-500">Why us?</h3>
      <div className="grid grid-cols-2 place-items-center items-stretch w-full gap-y-5 sm:flex justify-between">
        <div className="hover:bg-orange-50 flex flex-col items-center justify-center w-37.5 rounded-xl shadow-xl text-center p-6 mt-5">
          <Fast />
          <p className="font-semibold mt-5 ">Fast</p>
        </div>
        <div className="hover:bg-orange-50 flex flex-col items-center justify-center w-37.5 rounded-xl shadow-xl text-center p-6 mt-5">
          <Food />
          <p className="font-semibold mt-5">Best Resturants</p>
        </div>
        <div className="hover:bg-orange-50 flex flex-col items-center justify-center w-37.5 rounded-xl shadow-xl text-center p-6 mt-5">
          <Choice />
          <p className="font-semibold mt-5">Your Choise</p>
        </div>
        <div className="hover:bg-orange-50 flex flex-col items-center justify-center w-37.5 rounded-xl shadow-xl text-center p-6 mt-5">
          <Clock />
          <p className="font-semibold mt-5">24 - 7</p>
        </div>
      </div>
    </div>
  );
}

export default Attribiutes;
