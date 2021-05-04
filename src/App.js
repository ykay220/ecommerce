import Home from './components/Home'
import ItemCards from './components/ItemCards'
import ItemDetail from './components/ItemDetail'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { Switch, Route } from 'react-router-dom'
import  { useState } from 'react';



import './App.css';


function App() {
  const [cart, updateCart] = useState([
   
  ])
 
  
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path="/">
              <ItemCards/>
          </Route>
          <Route exact path="/shop">
              <ItemCards/>
          </Route>
          <Route exact path="/cart">
              <Cart updateCart={updateCart} cart={cart}/>
          </Route>
          <Route path="/shop/:id">
              <ItemDetail updateCart={updateCart} cart={cart}/>
          </Route>
      </Switch> 
    </div>
  );
}

export default App;
