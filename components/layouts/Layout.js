import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="max-w-4xl mx-8 md:m-auto flex md:p-5 justify-between items-center py-2">
        <div>
          <Link href="/">
            <span className="text-orange-600 font-semibold text-xl">
              RohaFood
            </span>
          </Link>
        </div>
        <div>
          <Link className="ml-4" href="/menu">
            <span className="text-gray-500 font-medium">Menu</span>
          </Link>
          <Link className="ml-4 text-gray-500 font-medium" href="/categories">
            <span className="text-gray-500 font-medium">Categories</span>
          </Link>
        </div>
      </header>
      <div className="min-h-180 w-full mx-auto">{children}</div>
      <footer className="bg-orange-600 text-center text-white py-3 px-0 mt-8">
        <a className="mr-4 text-gray-900 font-bold text-lg" href="/" target="_blank" rel="noreferrer">
          RohaFood
        </a>
        Made by RoqiaHalimi &copy;
      </footer>
    </>
  );
}

export default Layout;
