import { useState } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import PromoSection from './Components/PromoSection';
import TourSection from './Components/TourSection';
import Header from './Core/Header';

function App() {
  const [scrollClass, setscrollClass] = useState('');
  const showHeader = (e) => {
    if (e.target.scrollTop > 80) {
      setscrollClass("showHeader");
    } else if (e.target.scrollTop < 80) {
      setscrollClass('')
    }
  };
  
const scroll = (e) => {
  scroll = e.target.onScroll
  return scroll 
}
console.log(scroll);
  return (
    <div className="position-relative" onScroll={showHeader} >
      <div className='Wrapper-header-container position-relative'>
        <Header scrollClass={scrollClass} />
        <div>
          <HeroSection  />
        </div>
      </div>
      <TourSection/>
      <PromoSection />
    </div>
  );
}

export default App;
