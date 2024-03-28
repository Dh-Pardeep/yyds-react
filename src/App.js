import "./App.css";
import Faqs from "./components/view/Faqs";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-repeat-y bg-[url(/src/assets/images/webp/bg-image.webp)]">
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
