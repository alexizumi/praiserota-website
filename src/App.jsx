import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import EarlyAccess from './pages/EarlyAccess';
import Features from './pages/Features';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/contact" element={<Contact />} />
            {/* Keep old route for backwards compatibility */}
            <Route path="/try-it" element={<EarlyAccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;