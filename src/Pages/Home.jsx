import AboutAudiophile from "../ui/AboutAudiophile";

import Hero from "../ui/Hero";
import ProductCards from "../ui/ProductCards";
import YX1EARPHONES from "../ui/YX1EARPHONES";
import ZX7SPEAKER from "../ui/ZX7SPEAKER";
import ZX9SPEAKER from "../ui/ZX9SPEAKER";

function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
      <ZX9SPEAKER />
      <ZX7SPEAKER />
      <YX1EARPHONES />
      <AboutAudiophile />
    </>
  );
}

export default Home;
