import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import OtherServicesPage from './pages/OtherServicesPage';
import Privacy from './pages/Privacy';
import ContactPage from './pages/ContactPage';
import ScrollToHash from './components/ScrollToHash';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        {/* 👇 Add ScrollToHash here */}
        <ScrollToHash />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/other-services" element={<OtherServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
