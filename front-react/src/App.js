
import './App.css';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
//import CompShowProducts from './Product/ShowProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/juguetes' element={<ShopCategory category="juguetes"/>}/>
        <Route path='/lubricantes' element={<ShopCategory category="lubricantes"/>}/>
        <Route path='/lenceria' element={<ShopCategory category="lenceria"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
          <Footer/>

      </BrowserRouter>
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
