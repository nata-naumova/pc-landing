import React from "react";

import Banners from "../components/Banners/Banners";
import Services from "../components/Services/Services";
import Installment from "../components/Installment/Installment";
import WorkSteps from "../components/WorkSteps/WorkSteps";
import Advantages from "../components/Advantages/Advantages";
import Socials from "../components/Socials/Socials";
import Testimonials from "../components/Testimonials/Testimonials";

import "../index.css";

const Main = () => {
  return (
    <>
      <div className="container">
        <Banners />
        <Services />
        <Installment />
        <WorkSteps />
        <Advantages />
        <Socials />
        <Testimonials />
      </div>
    </>
  );
};

export default Main;
