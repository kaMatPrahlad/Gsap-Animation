import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import VideoCarousel from "./components/VideoCarousel";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default Sentry.withProfiler(App);
