import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TopHeader } from './common/top-header';
import { MainFooter } from './common/main-footer';
import { MainHeader } from './common/main-header';
import { Home } from './components/home/home';
import { Pricing } from './components/pricing/pricing';
import { ContactUs } from './components/contact-us/contact-us';
import { Portfolio } from './components/portfolio/portfolio';
import { Embroidery } from './components/our-services/embroidery/embroidery';

function App() {
  return (
    <Router>
      <TopHeader />
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services/embroidery" element={<Embroidery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
