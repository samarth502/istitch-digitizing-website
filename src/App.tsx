import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { TopHeader } from './common/top-header';
import { MainFooter } from './common/main-footer';

function App() {
  return (
    <Router>
      <TopHeader />
      <Routes>
        {/* <Route path="/" element={<>Istitch Digitizing Website</>} /> */}
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
