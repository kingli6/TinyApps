import Navbar from './components/homepage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homepage/HomePageComponent';
import ContactPage from './components/homepage/ContactPage';
import MemoryGameComponent from './components/memoryGame/MemoryGameComponent';
import WorkOutClock from './components/workOutClock/WorkOutClock';
import ReactBasics from './components/homepage/basicsReact/ReactBasics'
import { CartProvider } from './components/homepage/basicsReact/services/CartContext';
function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/memory-game" element={<MemoryGameComponent />} />
            <Route path="/work-clock" element={<WorkOutClock />} />
            <Route path="/reactBasics" element={<ReactBasics />} />
          </Routes>
          
        </div>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
