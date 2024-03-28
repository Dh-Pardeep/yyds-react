import "./App.css";
import Faqs from "./components/view/Faqs";
import OurBuidlers from "./components/view/OurBuidlers";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-repeat-y bg-[url(/src/assets/images/webp/bg-image.webp)]">
      <OurBuidlers/>
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
