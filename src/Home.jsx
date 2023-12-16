import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PricePlan from "./components/PricePlan";
import Navbar from "./components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Feedback />
      <PricePlan />
      <Footer />
    </>
  );
}

export default Home;
