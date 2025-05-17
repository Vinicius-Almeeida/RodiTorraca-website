import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import PracticeAreas from '../components/PracticeAreas';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <PracticeAreas />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
