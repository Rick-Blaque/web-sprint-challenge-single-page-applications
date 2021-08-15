import React from "react";
import Form from './Form'
import { Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
      <div>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to='/'></Link>
      <Link to='/order-pizza'></Link>

      <Switch>

        <Route path='/order-pizza'>
          <Form />
        </Route>
        <Route path='/'>

        </Route>
      </Switch>
     
       
     </div>
   
  );
};
export default App;
