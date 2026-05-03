import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BandMembers from './components/BandMembers';
import Gallery from './components/Gallery';
import Repertoire from './components/Repertoire';
import BookUs from './components/BookUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <BandMembers />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Repertoire />
        <div className="section-divider" />
        <BookUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
