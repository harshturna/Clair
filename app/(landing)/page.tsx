import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import FeatureSection from "./feature-section";
import GetStartedFree from "./get-started-section";
import Footer from "@/components/footer";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <GetStartedFree />
      <Footer />
    </div>
  );
};

export default LandingPage;
