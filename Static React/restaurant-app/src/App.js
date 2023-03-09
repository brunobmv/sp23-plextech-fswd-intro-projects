import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import DataEntries from './pages/data.js';
import RecomendationPage from './pages/rec.js';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pages/data" element={<DataEntries/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
