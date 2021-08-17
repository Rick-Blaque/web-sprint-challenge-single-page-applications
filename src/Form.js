import React, { Component, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './Form.css'
import Order from './Order'
import schema from './Validation/formSchema'
import * as yup from 'yup'

const initialFormErrors = {
    name: '' 
  }

export default function Form(props) {
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const {addOrder, pizzaOrder, pizza, errors} = props;
    
        function onSubmit (event) {
        event.preventDefault();
        
        addOrder()
    }
   function onChange(evt) {
       const { checked, name, value, type} = evt.target
       
    if (type === 'checkbox') {
        pizzaOrder( name,checked)
        yup.reach(schema, name).validate(checked)
        } else {
        // otherwise, call change() with name and value
        pizzaOrder( name, value)
        yup.reach(schema, name).validate(value)
        .catch((err) => {
            setFormErrors({...formErrors, [name]: err.message})
        })
        }
       
       
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
                    <div>{formErrors.name}</div>
                     <br/>
                   <label htmlFor='extraCheese'>
                       Extra Cheese: 
                       <input type='checkbox'
                       name='extraCheese'
                       checked={pizza.extraCheese}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='pepperoni'>
                       Pepperoni: 
                       <input type='checkbox'
                       name='pepperoni'
                       checked={pizza.pepperoni}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='mushroom'>
                       Mushroom: 
                       <input type='checkbox'
                       name='mushroom'
                       checked={pizza.mushroom}
                       onChange={onChange}
                       />
                   </label>
                    <br/>
                    <label htmlFor='ham'>
                       Ham: 
                       <input type='checkbox'
                       name='ham'
                       checked={pizza.ham}
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


