import React, { Component, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './Form.css'
import Order from './Order'

// const defaultFormValues = {name: '', size:'', extraCheese: false, pepperoni:false, mushroom:false, ham:false, special:'' }

export default function Form(props) {
    // const [pizza, setPizza] = useState(defaultFormValues)
    
   function onSubmit (event) {
       event.preventDefault();
    //    const newPizza = {
    //        name: pizza.name,
    //        size: pizza.size,
    //        extraCheese: pizza.extraCheese === false ? false : true,
    //        pepperoni: pizza.pepperoni === false ? false : true,
    //        mushroom: pizza.mushroom === false ? false : true,
    //        ham: pizza.ham === false ? false : true,
    //        special: pizza.special
    //    }
       
       props.addPizza()

   }
   function onChange(evt) {
       props.orderPizza( evt.target.name,evt.target.value)
   }
    
        return (
            <div>
                <h1>Fresh Hot Pizza</h1>
                <form id='pizza-form' onSubmit={onSubmit}>
                    <label htmlFor='name'>Name: <input type='text'
                     name='name' 
                     //value={pizza.name}
                     id='name-input' 
                     minLength='2'
                     onChange={onChange}/>
                     </label>
                     <br/>
                   <label htmlFor='extraCheese'>
                       Extra Cheese: 
                       <input type='checkbox'
                       name='extraCheese'
                       //value={pizza.extraCheese}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='pepperoni'>
                       Pepperoni: 
                       <input type='checkbox'
                       name='pepperoni'
                      // value={pizza.pepperoni}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='mushroom'>
                       Mushroom: 
                       <input type='checkbox'
                       name='mushroom'
                       //value={pizza.mushroom}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='ham'>
                       Ham: 
                       <input type='checkbox'
                       name='ham'
                       //value={pizza.ham}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='size'>Size: 
                    <select 
                    name='size' 
                    id='size-dropdown' 
                    //value={pizza.size}
                    onChange={onChange} >
                    <option value=''>Select Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option><option value='x-large'>X-Large</option>
                    </select>
                    </label>
                    <br/>
                    <label htmlFor='special'>
                        Special Instructions: 
                        <textarea  type="text" name='special' 
                      //  value={pizza.special}
                        id='special-text' 
                        onChange={onChange}/>
                        </label>
                    
                    
                    <br/>
                    <Link to='/orderSummary'>
                    <button id='order-button'>Add to Order</button>
                    </Link>
                </form>
                
                
              
            </div>
        )
    
}


