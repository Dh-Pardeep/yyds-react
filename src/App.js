import "./App.css";
import Faqs from "./components/view/Faqs";
import OurBuidlers from "./components/view/OurBuidlers";
import Footer from "./components/common/Footer";
import Roadmap from "./components/view/Roadmap";
import Tokenomics from "./components/view/Tokenomics";
import About from "./components/view/About";
import Header from "./components/common/Header";
import Hero from "./components/view/Hero";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <div className="bg-repeat-y bg-[url(/src/assets/images/webp/bg-image.webp)]">
      <BackToTop/>
      <Header/>
      <Hero/>
      <About/>
      <Tokenomics/>
      <Roadmap/>
      <OurBuidlers/>
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
