import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import PromoSection from './Components/PromoSection';
import TourSection from './Components/TourSection';
import Header from './Core/Header';

function App() {
    const stickyHeader = useRef()
    useEffect(() => {
      let fixedTop = stickyHeader.current.offsetTop;
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
          setShowHeader('showHeader')
        } else {
          setShowHeader('')
        }
      }
      window.addEventListener('scroll', fixedHeader)
    }, [])
    
    const [showHeader,setShowHeader] = useState('');
    // useLayoutEffect(() => {
      
    // }, [])

    
  return (
    <div className="position-relative "  >
      <div className='Wrapper-header-container position-relative'>
        <div ref={stickyHeader} >
          <Header id="mainHeader" showHeader={showHeader}  />
        </div>
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
