import './App.css';
import CardProduct from './Components/CardProduct';
import Navbar from './Components/Navbar';
import CardDetail from './Components/CardDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route exact path="/" element={<CardProduct />} />
            <Route exact path="/:id" element={<CardDetail />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
