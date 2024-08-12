import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}