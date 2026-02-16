import { useRouter } from "next/router";
import React from "react";
import DetailsPage from "../../components/templates/DetailsPage";

function Details({ data }) {
  const router = useRouter();
  console.log(data);

  if (router.isFallback) {
    return <h2>Loading Page ...</h2>;
  }
  return <DetailsPage {...data} />;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("https://food-server-sable.vercel.app/data");
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`https://food-server-sable.vercel.app/data/${id}`);
  const data = await res.json();
  console.log(data);

  if (!data.id) {
    return { notFound: true };
  }
  return { props: { data }, revalidate: 10 };
}
