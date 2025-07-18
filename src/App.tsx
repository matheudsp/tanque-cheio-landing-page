import "./App.css";
import { ScrollProgress } from "./components/animate-ui/components/scroll-progress";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SectionAnimatedFeatures } from "./components/sections/SectionAnimatedFeatures";

function App() {
  return (
    <>
      <ScrollProgress className={"absolute "}>
        <main className="max-w-7xl mx-auto ">
          <Header />
          <Hero />
          <SectionAnimatedFeatures />
        </main>
        <Footer />
      </ScrollProgress>
    </>
  );
}

export default App;
