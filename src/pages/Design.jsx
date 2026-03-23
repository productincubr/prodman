import DesignHeader from "../servicewebpage/DesignHeader";
import DesignHero from "../servicewebpage/DesignHero";
import OurServices from "../servicewebpage/OurServices";
import DesignFooter from "../servicewebpage/DesignFooter";
import Testimonials from "../servicewebpage/Testimonials";
import PortfolioSection from "../servicewebpage/PortfolioSection";
import OurCapabilities from "../servicewebpage/OurCapabilities";
import GetInTouchDesign from "../servicewebpage/GetInTouchDesign";
import Seo from "../components/Seo/Seo";
import "./Design.css";

const Design = () => {
  return (
    <div className="design-page-wrapper">
      <Seo
        title="Tech Concierge - Prodman | Branding, Web Design & More"
        description="Professional tech concierge services including product packaging, branding, web development, UX/UI design, and social media creatives. Expert creative solutions for your business."
      />

      <DesignHeader />
      <DesignHero />
      <OurServices />
      <Testimonials />
      <PortfolioSection />
      <OurCapabilities />
      <GetInTouchDesign />
      <DesignFooter />
    </div>
  );
};

export default Design;
