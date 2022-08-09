import React from "react";

import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import ExcitingFeaturesSection from "../components/excitingFeatures";
import PreFooter from "../components/PreFooter";

function LandingPage() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <HeroSection />
      <br />
      <br />
      <ExcitingFeaturesSection />
      <PreFooter />
    </div>
  );
}

export default LandingPage;
