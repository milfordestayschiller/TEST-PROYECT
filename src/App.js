import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./Components/NavBar/NavBar"
import CartContainer from "./Components/CartContainer/CartContainer"



import { CartTotal } from "./Components/Cart/Cart"
import { CartContextProvider } from "./Storage/cartContext";


import "./App.css";


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <div className="app-container">
            <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer  />}/>
              <Route path='/cart' element={ <CartContainer  />}/>
              <Route path='/cart-total' element={ <CartTotal  />}/>
              <Route path='/category/:categoryId' element={ <ItemListContainer />} />
              <Route path='/item/:itemId' element={ <ItemDetailContainer  />}/>
            </Routes>
          </div>        
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
