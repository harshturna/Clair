import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import FeatureSection from "./feature-section";
import GetStartedFree from "./get-started-section";
import Footer from "@/components/footer";
import HowItWorks from "./how-it-works";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <GetStartedFree />
      <Footer />
    </div>
  );
};

export default LandingPage;
