import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Theme from './pages/Theme';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/features' element={<Features />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/theme' element={<Theme />} />
      </Routes>
    </div>
  );
}

export default App;
