import Navbar from './components/homepage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homepage/HomePageComponent';
import ContactPage from './components/homepage/ContactPage';
import MemoryGameComponent from './components/memoryGame/MemoryGameComponent';
import WorkOutClock from './components/workOutClock/WorkOutClock';
import HeaderComp from './components/homepage/basicsReact/Header'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/memory-game" element={<MemoryGameComponent />} />
            <Route path="/work-clock" element={<WorkOutClock />} />
            <Route path="/reactBasics" element={<HeaderComp />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
