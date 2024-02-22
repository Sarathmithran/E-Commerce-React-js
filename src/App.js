import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import ProductPage from './Components/ProductsPage/ProductPage';
import Footer from './Components/Footer/Footer';
import Context from './Components/Context';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

function App() {

  const [textBoxInput,setTextBoxInput] = useState('');
  const [cartItems,setCartItems] = useState([]);

  //callback function for user input
  const searchTextCB = (text) =>{
    setTextBoxInput(text);
  }

  //addToCart function & add products quatity from cart
  const handleAddProduct = (product) =>{
    const productExit = cartItems.find((item)=> item.id === product.id);
    if(productExit){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...productExit,quantity:productExit.quantity + 1} : item));
    } else{
      setCartItems([...cartItems, {...product,quantity:1}]);
    }
  }

  //remove products
  const handleRemoveProduct = (product) =>{
    const productExit = cartItems.find((item)=> item.id === product.id);
    if(productExit.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else{
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? {...productExit,quantity: productExit.quantity - 1}: item
        )
        );
    }
  };

  //cart clearance function
  const handleCartClearance = () =>{
    setCartItems([]);
  }


  

  return (
    <>
    <Header searchTextCB={searchTextCB} cartItems={cartItems}/>
    <Context>
      <Routes>
        <Route path='/' element={<Home textBoxInput={textBoxInput} handleAddProduct={handleAddProduct}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Product/:productid' element={<Product handleAddProduct={handleAddProduct}/>}/>
        <Route path='/ProductsPage' element={<ProductPage textBoxInput={textBoxInput} handleAddProduct={handleAddProduct}/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} handleCartClearance={handleCartClearance}/>}/>
      </Routes>
    </Context>
    <Footer/>
    
    </>
  );
}

export default App;
