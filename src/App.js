import './App.css';
import { BrowserRouter } from "react-router-dom";

import Quiz from "./Components";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Quiz />
        </BrowserRouter>      
    </div>
  );
}

export default App;
