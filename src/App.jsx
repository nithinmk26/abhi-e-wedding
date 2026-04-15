import React from 'react';
import Hero from './components/Hero.jsx';
import WedsBanner from './components/WedsBanner.jsx';
import Collage from './components/Collage.jsx';
import Details from './components/Details.jsx';
import MapSection from './components/MapSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main>
      <Hero />
      <WedsBanner />
      <Details />
      <MapSection />
      <Collage />
      <Footer />
    </main>
  );
}
