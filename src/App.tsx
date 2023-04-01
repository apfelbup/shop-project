import {Routes, Route} from 'react-router-dom';
import "./app.scss";

import Header from './components/Header';
import MainPage from './pages/Mainpage';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Product from './components/Product';





function App() {

  
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="/products/:category" element={<ProductList/>}/>
    <Route path="/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>

    <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
