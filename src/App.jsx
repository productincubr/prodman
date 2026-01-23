import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


import LandingFirst from "./pages/LandingFirst";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import StudioSpaces from "./components/StudioSpaces/StudioSpaces";
import HowItWorks from "./components/HowItWork/HowItWork";
import AboutUs from "./components/AboutUs/AboutUs";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Footer from "./components/Footer/Footer";
import DesignHeader from "./servicewebpage/DesignHeader";
import DesignHero from "./servicewebpage/DesignHero";
import OurServices from "./servicewebpage/OurServices";
import DesignFooter from "./servicewebpage/DesignFooter";
import Testimonials from "./servicewebpage/Testimonials";
import Portfolio from "./pages/Portfolio";
import GetInTouchDesign from "./servicewebpage/GetInTouchDesign";
import EthiHero from "./servicewebpage/ethiPage/ethiHero/EthiHero";
import EthiScope from "./servicewebpage/ethiPage/ethiScope/EthiScope";
import EthiExperience from "./servicewebpage/ethiPage/ethiExperience/EthiExperience";
import DesignApproach from "./servicewebpage/ethiPage/ethiDesignApproach/DesignApproach";
import NblServicesHero from "./servicewebpage/nblServices/nblServicesHero/NblServicesHero";
import NblServicesScope from "./servicewebpage/nblServices/nblServicesScope/NblServicesScope";
import NblExperience from "./servicewebpage/nblServices/nblExperience/NblExperience";
import WldHero from "./servicewebpage/wldServices/wldHero/WldHero";
import WldServicesScope from "./servicewebpage/wldServices/wldScope/WldServicesScope";
import WldServicesExperience from "./servicewebpage/wldServices/wldServicesExperience/WldServicesExperience";
import PortfolioSection from "./servicewebpage/PortfolioSection";
import ContactUs from "./pages/ContactUs";
import ServicesContact from "./pages/ServicesContact";

// NEW PAGE
// import ContactUs from "./src/pages/ContactUs"

const Home = ({ openPopup, isPopupOpen, closePopup }) => {
  return (
    <>
      <Navbar onBookNow={openPopup} />

      <Hero />
      <StudioSpaces />
      <WhyChoose />
      <HowItWorks />
      <AboutUs />

      {/* Book Now Popup (unchanged) */}
      <GetInTouch isOpen={isPopupOpen} onClose={closePopup} />

      <Footer />
    </>
  );
};

// Design Page Component
const Design = () => {
  return (
    <>
      <DesignHeader />
      <DesignHero />
      <OurServices />
      {/* <OngoingWork/> */}
      <PortfolioSection />
      <Testimonials />
      <GetInTouchDesign />
      <DesignFooter />
    </>
  );
};

// Ethi Page Component

const Ethi = () => {
  return (
    <>
      <DesignHeader />
      <EthiHero />
      <EthiScope />
      <EthiExperience />
      <DesignApproach />
      <DesignFooter />
    </>
  )
};

// NBL Page Component
const NBL = () => {
  return (
    <>
      <DesignHeader />
      <NblServicesHero />
      <NblServicesScope />
      <NblExperience />
      {/* <NBLDesignApproach/> */}
      <DesignFooter />
    </>
  )
}

// WLD Page Component

const WLD = () => {
  return (
    <>
      <DesignHeader />
      <WldHero />
      <WldServicesScope />
      <WldServicesExperience />
      <DesignFooter />
    </>
  )
}

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Routes>
      <Route path="/" element={<LandingFirst />} />

      <Route
        path="/studio"
        element={
          <Home
            openPopup={openPopup}
            isPopupOpen={isPopupOpen}
            closePopup={closePopup}
          />
        }
      />

      {/* CONTACT PAGE ROUTE */}
      <Route path="/studio/contact" element={<ContactUs />} />

      {/* design page route */}
      <Route path="/design" element={<Design />} />
      <Route path="/design/portfolio" element={<Portfolio />} />

      {/* Ethi page routing (nested under /design) */}
      <Route path='/design/ethi-services' element={<Ethi />} />

      {/* NBL page routing (nested under /design) */}
      <Route path='/design/nbl-services' element={<NBL />} />

      {/* WLD page routing (nested under /design) */}
      <Route path='/design/wld-services' element={<WLD />} />

      <Route path="/design/contact" element={<ServicesContact/>} />

    </Routes>
  );
};

export default App;
