import React from "react";

import Header from "../components/Header/Header";
import Banners from "../components/Banners/Banners";
import Services from "../components/Services/Services";
import Installment from "../components/Installment/Installment";
import WorkSteps from "../components/WorkSteps/WorkSteps";
import Advantages from "../components/Advantages/Advantages";
import Socials from "../components/Socials/Socials";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import SocialsWidget from "../components/SocialsWidget/SocialsWidget";

import "../index.css";

const Main = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Banners />
        <Services />
        <Installment />
        <WorkSteps />
        <Advantages />
        <Socials />
        <Testimonials />
        <Footer />
      </div>
      <SocialsWidget />;
    </>
  );
};

export default Main;
