import React from "react";
import BoxIllustrations from "../Components/BoxIllustrations";
import Instructions from "../Components/Instructions";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Team from "../Components/Team";
import WhyUs from "../Components/WhyUs";

const Index = () => {
  return (
    <>
      <Navbar />
      <Main />
      <BoxIllustrations />
      <WhyUs />
      <Instructions />
      <Team />
    </>
  );
};

export default Index;
