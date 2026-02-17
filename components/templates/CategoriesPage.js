import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = (e) => {
    router.push({ pathname: "/categories", query });
  };
  return (
    <div className="max-w-4xl m-auto">
      <h2 className="border-b-2 pb-1 mx-8 border-orange-500 mb-6 w-fit text-2xl">
        Categories
      </h2>
      <div className="flex items-center gap-x-3 mx-8">
        <select
          name="difficulty"
          value={query.difficulty}
          onChange={changeHandler}
          id=""
          className="w-50 border-2 p-1 border-orange-500 rounded-lg"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          name="time"
          value={query.time}
          onChange={changeHandler}
          id=""
          className="w-50 border-2 p-1 border-orange-500 rounded-lg"
        >
          <option value="">Cooking Time</option>
          <option value="more">More than 30 minutes</option>
          <option value="less">Less than 30 minutes</option>
        </select>
        <button
          onClick={searchHandler}
          className="bg-orange-500 rounded-lg p-1 text-white border cursor-pointer border-orange-500"
        >
          Search
        </button>
      </div>
      <div
        className="flex flex-col items-center mt-6
                      sm:grid grid-cols-2 lg:grid-cols-3
                      place-items-center sm:items-stretch"
      >
        {!data.length ? (
          <img src="/images/not.png" alt="not found result !" />
        ) : null}
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
