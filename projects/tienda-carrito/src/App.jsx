import { useState } from 'react'
import { Products } from './components/Product'
import { products as initialProducts } from './mocks/product.json'
import './App.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/Cart';


function App() {
  const[products]=useState(initialProducts);
  const{filterProducts}=useFilters();
  
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header/> 
      <Cart/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App
