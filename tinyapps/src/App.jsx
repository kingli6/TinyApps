import Navbar from './components/homepage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homepage/HomePageComponent';
import ContactPage from './components/homepage/ContactPage';
import LoginSignup from './components/login/LoginSignup';
function App() {

  return (
    <>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
          <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginSignup />} />
          </Routes>
      </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
