import './App.css';
import HeroSection from './Components/HeroSection';
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
    </div>
  );
}

export default App;
