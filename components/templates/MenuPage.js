import React from "react";
import Card from "../modules/Card";
function MenuPage({ data }) {
  console.log(data);

  return (
    <div className="max-w-4xl mx-auto py-5">
      <h2 className="text-orange-600 text-xl font-semibold px-8 underline underline-offset-2">Menu</h2>
      <div className="flex flex-col items-center mt-6
                      sm:grid grid-cols-2 lg:grid-cols-3
                      place-items-center sm:items-stretch">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
