import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Logos from '../components/Logos';
import BrandFilm from '../components/BrandFilm';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main id="main-content">
      <Hero />
      <CaseStudies />
      <Logos />
      <BrandFilm />
      <Services />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
