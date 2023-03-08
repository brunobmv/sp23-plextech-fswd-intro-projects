import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path = "./pages/data.js" component={data}/>
        <Route exact path = "./pages/rec.js" component={rec}/>
      </BrowserRouter>
      <h1>Welcome to our restaurant!</h1>
      <h2>This is the menu</h2>
      <button onClick="{}"></button>
      <h2>This is your page of recomendations</h2>

    </div>
  );
}

export default App;
