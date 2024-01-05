import './App.css'
import HeaderComponent from './components/homepage/HeaderComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homepage/HomePageComponent';
import LoginSignup from './components/login/LoginSignup';
function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/login-page" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
