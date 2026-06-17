import { useScrollReveal } from '../hooks/useScrollReveal.js';
import Navbar from '../components/landing/Navbar.jsx';
import Hero from '../components/landing/Hero.jsx';
import About from '../components/landing/About.jsx';
import Services from '../components/landing/Services.jsx';
import Platform from '../components/landing/Platform.jsx';
import Process from '../components/landing/Process.jsx';
import CtaBanner from '../components/landing/CtaBanner.jsx';
import Contact from '../components/landing/Contact.jsx';
import Footer from '../components/landing/Footer.jsx';

/** The marketing landing page — same section order as index.html. */
export function LandingPage() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Platform />
      <Process />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
