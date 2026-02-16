import React from "react";

function CategoriesPage() {
  return (
    <div className="max-w-4xl m-auto">
      <h2 className="border-b-2 pb-1 mx-8 border-orange-500 mb-6 w-fit text-2xl">
        Categories
      </h2>
      <div className="flex items-center gap-x-3 mx-8">
        <select
          name=""
          id=""
          className="w-50 border-2 p-1 border-orange-500 rounded-lg"
        >
          <option value="">Difficulty</option>
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>
        <select
          name=""
          id=""
          className="w-50 border-2 p-1 border-orange-500 rounded-lg"
        >
          <option value="">Cooking Time</option>
          <option value="">More than 30 minutes</option>
          <option value="">Less than 30 minutes</option>
        </select>
        <button className="bg-orange-500 rounded-lg p-1 text-white border cursor-pointer border-orange-500">Search</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
