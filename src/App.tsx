import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TopHeader } from './common/top-header';
import { MainFooter } from './common/main-footer';
import { MainHeader } from './common/main-header';
import { Home } from './components/home/home';
import { Pricing } from './components/pricing/pricing';

function App() {
  return (
    <Router>
      <TopHeader />
      <MainHeader/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
