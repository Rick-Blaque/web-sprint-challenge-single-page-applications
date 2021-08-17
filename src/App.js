import React, { useReducer, useState, useEffect } from "react";
import Form from './Form'
import { Route, Link, Switch } from 'react-router-dom'
import Order from './Order'

import './App.css'
import axios from "axios";
import schema from './Validation/formSchema'
import * as yup from 'yup'


const defaultFormValues = {name: '', size:'', extraCheese: false, pepperoni:false, mushroom:false, ham:false, special:'' }





function App() {
  const [pizza, setPizza] = useState(defaultFormValues);
  const [order, setOrder] = useState([]); // Array of orders
 
 
 


  

  function addOrder() {

     const newOrder = {
      name: pizza.name,
      size: pizza.size,
      // extraCheese: pizza.extraCheese ,
      toppings:["pepperoni", "ham", "mushroom", "extraCheese"].filter(top => pizza[top]),
      // pepperoni: pizza.pepperoni, 
      // mushroom: pizza.mushroom, 
      // ham: pizza.ham, 
      special: pizza.special
  }
 
  const latestOrder = {...order, newOrder};
  setOrder(latestOrder)
    axios.post('https://reqres.in/api/orders', newOrder)
  
  

  
  }


function pizzaOrder(name, value){
      const newPizza = {...pizza, [name]: value}
      setPizza(newPizza)
      addOrder()
  }
  return (
      <div className="App">
        <nav>
        <h1>Lambda Eats</h1>
        
        <Link to='/'>Home</Link>
        </nav>
        
      <Route exact path='/'> 
        <h1>Order the best Pizza </h1>  
        <Link to='/pizza'><button id='order-pizza'>Order Pizza</button></Link>
       
      </Route>
      
     

      <Switch>
          <Route path='/orderSummary'>
             <Order order={pizza}/>
          </Route>
          <Route path='/pizza'>
             <Form addOrder={addOrder} pizzaOrder={pizzaOrder} pizza={pizza} 
           />
          </Route>
          <Route exact path='/'>

          </Route>
      </Switch>
     
       
     </div>
   
  );
};
export default App;
