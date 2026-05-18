import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BandMembers from './components/BandMembers';

const Gallery = lazy(() => import('./components/Gallery'));
const Repertoire = lazy(() => import('./components/Repertoire'));
const Venues = lazy(() => import('./components/Venues'));
const BookUs = lazy(() => import('./components/BookUs'));
const Footer = lazy(() => import('./components/Footer'));
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main aria-label="Main Content">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <BandMembers />
        <div className="section-divider" />
        <Suspense fallback={<div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Gallery />
          <div className="section-divider" />
          <Repertoire />
          <div className="section-divider" />
          <Venues />
          <div className="section-divider" />
          <BookUs />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
