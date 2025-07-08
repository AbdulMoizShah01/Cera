import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import TopBar from './components/TopBar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/Products';
import Mossent from './components/Products/Mossent';
import ServicesPage from './pages/Services';
import TeamPage from './pages/TeamPage';
function App() {
  return (
    <div className="app">
      <TopBar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/mossent-repellant" element={<Mossent/>}/>
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/OurTeam" element={<TeamPage/>} />
   
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;