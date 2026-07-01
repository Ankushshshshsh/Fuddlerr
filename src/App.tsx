import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Hero from './components/Hero';
import MarineDrive from './components/MarineDrive';
import ProductShowcase from './components/ProductShowcase';
import Founders from './components/Founders';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-espresso overflow-x-hidden">
      {isLoading && <Loading />}
      <Hero />
      <MarineDrive />
      <ProductShowcase />
      <Founders />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
