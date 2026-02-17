import React from "react";
import CategoriesPage from "../../components/templates/CategoriesPage";

function index({ data }) {
  

  return <CategoriesPage data={data} />;
}

export default index;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch("https://food-server-sable.vercel.app/data");
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (item) => item.Difficulty && item.Difficulty === difficulty,
    );

    const timeResult = item.details.filter((item) => {
      const cookingTime = item["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return item;
      } else if (time === "more" && +timeDetail > 30) {
        return item;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });
  return {
    props: { data: filteredData },
  };
}
