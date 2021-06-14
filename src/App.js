import React from "react";
import Pizza from 'Pizza.js'
import { Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Pizza />
     
       <Route
          path='/'
       />
     
   
  );
};
export default App;
