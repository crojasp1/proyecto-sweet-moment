import logo from './logo.svg';
import './App.css';

import CompShowProducts from './Product/ShowProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    </div>


   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='' element= {<CompShowProducts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
          */
  );
}

export default App;
