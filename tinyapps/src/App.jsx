import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homepage/HomePageComponent';
import ContactPage from './components/homepage/ContactPage';
import MemoryGameComponent from './components/memoryGame/MemoryGameComponent';
import WorkOutClock from './components/workOutClock/WorkOutClock';
import ReactBasics from './components/basicsReact/ReactBasics'
import { CartProvider } from './components/basicsReact/services/CartContext';
import CheckOutComponent from './components/basicsReact/CheckOutComponent';
import TestPage1 from './components/testPage1/TestPage1';
import Header from './components/homepage/navBar/Header';
function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work-clock" element={<WorkOutClock />} />
            <Route path="/reactBasics" element={<ReactBasics />} />
            <Route path="/checkout" element={<CheckOutComponent />} />
            <Route path="/testPage1" element={<TestPage1 />} />
          </Routes>
          <Routes>
            <Route path="/memory-game" element={<MemoryGameComponent />} />

          </Routes>
          
        </div>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
