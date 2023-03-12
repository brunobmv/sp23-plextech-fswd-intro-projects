import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';

import DataEntries from './pages/data.js';
import RecomendationPage from './pages/rec.js';


function App() {

  const [spent, setSpent] = useState(0);
  const [cart, setCart] = useState([]);


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pages/data" element={<DataEntries spent={spent} setSpent={setSpent} cart={cart} setCart={setCart}/>}/>
          <Route path="/pages/rec" element={<RecomendationPage spent={spent} items={cart}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;