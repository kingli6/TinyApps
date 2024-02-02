import Navbar from './components/homepage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homepage/HomePageComponent';
import ContactPage from './components/homepage/ContactPage';
import LoginSignup from './components/login/LoginSignup';
import MemoryGameComponent from './components/memoryGame/MemoryGameComponent';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/memory-game" element={<MemoryGameComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
