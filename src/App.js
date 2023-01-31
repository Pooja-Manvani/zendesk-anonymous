import { useEffect, useRef, useState } from 'react';
import './App.css';
import ArticleSection from './Components/ArticleSection';
import CustomerExperienceSection from './Components/CustomerExperienceSection';
import HeroSection from './Components/HeroSection';
import PromoSection from './Components/PromoSection';
import SelectPlatformSection from './Components/SelectPlatformSection';
import TourSection from './Components/TourSection';
import UseCaseSection from './Components/UseCaseSection';
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
      <UseCaseSection />
      <SelectPlatformSection />
      <ArticleSection />
      <CustomerExperienceSection />
    </div>
  );
}

export default App;
