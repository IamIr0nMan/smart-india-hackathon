import React from "react";

import "./landingPage.css";

import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import ExcitingFeaturesSection from "../components/excitingFeatures";
import PreFooter from "../components/PreFooter";
import AnotherHero from "../components/anotherHero";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <Navbar />
        <br />
        <HeroSection />
        <br />
        <br />
        <ExcitingFeaturesSection />
        <AnotherHero />
        <PreFooter />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
