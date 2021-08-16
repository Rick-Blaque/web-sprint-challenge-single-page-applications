import React, { useReducer, useState } from "react";
import Form from './Form'
import { Route, Link, Switch } from 'react-router-dom'
import Order from './Order'

import './App.css'
import axios from "axios";


const defaultFormValues = {name: '', size:'', extraCheese: false, pepperoni:false, mushroom:false, ham:false, special:'' }


function App() {
  const [pizza, setPizza] = useState(defaultFormValues);


  const [order, setOrder] = useState([])

  function addPizza() {

    const newPizza = {
      name: order.name,
      size: order.size,
      extraCheese: order.extraCheese === false ? false : true,
      pepperoni: order.pepperoni === false ? false : true,
      mushroom: order.mushroom === false ? false : true,
      ham: order.ham === false ? false : true,
      special: order.special
  }
    axios.post('https://reqres.in/api/orders', newPizza).then((res) => {
      console.log(res.data);
    })
    const newPizzaOrder = [...pizza, newPizza]
    
    setOrder(newPizzaOrder)
  }
  function pizzaOrder(formName, formValue) {
    const newOrder = {...order, [formName]: formValue}
    setOrder(newOrder)
  }
  return (
      <div className="App">
        <nav>
        <h1>Lambda Eats</h1>
        
        <Link to='/'>Home</Link>
        </nav>
        
      <Route exact path='/'> 
        <h1>Order the best Pizza </h1>  
        <Link to='/order-pizza'><button>Order Pizza</button></Link>
       
      </Route>
      
     

      <Switch>
      <Route path='/orderSummary'>
                    <Order order={order}/>
                </Route>
        <Route path='/order-pizza'>
          <Form addPizza={addPizza} orderPizza={pizzaOrder} pizza={pizza}/>
        </Route>
        <Route exact path='/'>

        </Route>
      </Switch>
     
       
     </div>
   
  );
};
export default App;
