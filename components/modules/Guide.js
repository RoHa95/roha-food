import React from "react";
import Link from "next/link";
function Guide() {
  return (
    <div className="mb-28 justify-around gap-x-2 flex">
      <Link
        className="rounded-xl py-4 px-8 cursor-pointer shadow-lg shadow-orange-200"
        href="/menu"
      >
        Menu
      </Link>
      <Link
        className="rounded-xl py-4 px-8 cursor-pointer shadow-lg shadow-orange-200"
        href="/categories"
      >
        Categories
      </Link>
      <Link
        className="rounded-xl py-4 px-8 cursor-pointer shadow-lg shadow-orange-200"
        href="/"
      >
        Discount
      </Link>
    </div>
  );
}

export default Guide;
