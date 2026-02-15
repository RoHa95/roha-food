import React from "react";
import MenuPage from "../../components/templates/MenuPage";

function index({ data }) {
  return <MenuPage data={data} />;
}

export default index;

export async function getStaticProps() {
  const res = await fetch("https://food-server-sable.vercel.app/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 * 60 * 10,
  };
}
