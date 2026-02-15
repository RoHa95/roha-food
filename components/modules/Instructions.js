import React from "react";

function Instructions() {
  return (
    <div className="mb-25 mx-5">
      <h3 className="text-2xl text-orange-500 my-6 mx-0">How to Order?</h3>
      <ul className="p-0">
        <li className="text-lg font-medium leading-7 list-none before:content-[''] before:w-1 before:h-1 before:bg-orange-500 before:inline-block before:rounded-full before:text-orange-500 before:mr-2">
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className="text-lg font-medium leading-7 list-none before:content-[''] before:w-1 before:h-1 before:bg-orange-500 before:inline-block before:rounded-full before:text-orange-500 before:mr-2">
          {" "}
          Choose the restaurant you want to order from.
        </li>
        <li className="text-lg font-medium leading-7 list-none before:content-[''] before:w-1 before:h-1 before:bg-orange-500 before:inline-block before:rounded-full before:text-orange-500 before:mr-2">
          {" "}
          Select your items and tap “Add to Cart”.
        </li>
        <li className="text-lg font-medium leading-7 list-none before:content-[''] before:w-1 before:h-1 before:bg-orange-500 before:inline-block before:rounded-full before:text-orange-500 before:mr-2">
          {" "}
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className="text-lg font-medium leading-7 list-none before:content-[''] before:w-1 before:h-1 before:bg-orange-500 before:inline-block before:rounded-full before:text-orange-500 before:mr-2">
          {" "}
          Review your order and tap “Place Order”...
        </li>
        <li className="text-lg font-medium leading-7 list-none before:content-[''] before:w-1 before:h-1 before:bg-orange-500 before:inline-block before:rounded-full before:text-orange-500 before:mr-2">
          {" "}
          Track your order progress.
        </li>
      </ul>
    </div>
  );
}

export default Instructions;
