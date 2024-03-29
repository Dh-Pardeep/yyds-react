import "./App.css";
import Faqs from "./components/view/Faqs";
import OurBuidlers from "./components/view/OurBuidlers";
import Footer from "./components/common/Footer";
import Roadmap from "./components/view/Roadmap";
import Tokenomics from "./components/view/Tokenomics";

function App() {
  return (
    <div className="bg-repeat-y bg-[url(/src/assets/images/webp/bg-image.webp)]">
      <Tokenomics/>
      <Roadmap/>
      <OurBuidlers/>
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
