import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ArticleSection from './Components/ArticleSection';
import CustomerExperienceSection from './Components/CustomerExperienceSection';
import GlobalFooter from './Components/GlobalFooter';
import HeroSection from './Components/HeroSection';
import PromoSection from './Components/PromoSection';
import SelectPlatformSection from './Components/SelectPlatformSection';
import SignIn from './Components/SignIn';
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
      <BrowserRouter>
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
      <GlobalFooter />
      <Routes>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
      <div className='float-button-container'>
        <button className=' float-button px-4 p-2 text-white me-4'><span className='icon-email me-2 fs-4 text-white' onClick={()=>alert("In Progress...!")}></span>Contact Sales</button>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
