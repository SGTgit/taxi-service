import Hero from '../components/sections/Hero.jsx';
import HowItWorks from '../components/sections/HowItWorks.jsx';
import Destinations from '../components/sections/Destinations.jsx';
import Packages from '../components/sections/Packages.jsx';
import VehicleFleet from '../components/sections/VehicleFleet.jsx';
import FestivalTours from '../components/sections/FestivalTours.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import WhyChoose from '../components/sections/WhyChoose.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import Newsletter from '../components/sections/Newsletter.jsx';
import SEO from '../components/ui/SEO.jsx';
import SEOContent from '../components/sections/SEOContent.jsx';

function HomePage() {
  return (
    <>
      <SEO
        title="Taxi & Coach Hire in Vrindavan"
        description="Book premium taxi, cab and coach hire services in Vrindavan and Mathura. Pilgrimage tour packages, temple visits, airport transfers and outstation trips with experienced drivers."
        path="/"
        image="/assets/vechiles/hero-car-temple.webp"
        services={[
          'Vrindavan Taxi Service',
          'Pilgrimage Tour Packages',
          'Temple Visit Cabs',
          'Airport Transfer',
          'Coach Hire',
        ]}
      />
      <Hero />
      <SEOContent />
      <HowItWorks />
      <Destinations />
      <Packages />
      <VehicleFleet />
      <FestivalTours />
      <FAQ />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default HomePage;
