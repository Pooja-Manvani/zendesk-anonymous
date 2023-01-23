import './App.css';
import HeroSection from './Components/HeroSection';
import PromoSection from './Components/PromoSection';
import TourSection from './Components/TourSection';
import Header from './Core/Header';

function App() {
  return (
    <div className="">
      <div className='Wrapper-header-container '>
        <Header />
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
