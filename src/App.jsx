import AboutAudiophile from "./ui/AboutAudiophile";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import ProductCards from "./ui/ProductCards";
import YX1EARPHONES from "./ui/YX1EARPHONES";
import ZX7SPEAKER from "./ui/ZX7SPEAKER";
import ZX9SPEAKER from "./ui/ZX9SPEAKER";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductCards />
      <ZX9SPEAKER />
      <ZX7SPEAKER />
      <YX1EARPHONES />
      <AboutAudiophile />
      <Footer />
    </>
  );
}

export default App;
