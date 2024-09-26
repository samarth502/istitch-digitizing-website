import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Istitch Digitizing Website</>} />
      </Routes>
    </Router>
  );
}

export default App;
