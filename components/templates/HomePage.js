import React from "react";
import Banner from "../modules/Banner";
import Attribiutes from "../modules/Attribiutes";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Instructions from "../modules/Instructions";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

function HomePage() {
  return (
    <div className="max-w-4xl mx-2 md:m-auto md:p-5">
      <Banner />
      <Attribiutes/>
      <Definition/>
      <Companies/>
      <Instructions/>
      <Guide/>
      <Restrictions/>
    </div>
  );
}

export default HomePage;
