import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTopHeader from './common/top-header';
import { MainFooter } from './common/main-footer';

function App() {
  return (
    <Router>
      <MainTopHeader/>
      <Routes>
        {/* <Route path="/" element={<>Istitch Digitizing Website</>} /> */}
      </Routes>
      <MainFooter/>
    </Router>
  );
}

export default App;
