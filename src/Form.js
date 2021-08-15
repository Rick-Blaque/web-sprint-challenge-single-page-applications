import React, { Component } from 'react'

export default function Form() {
    
   
    
        return (
            <div>
                <form id='pizza-form'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' id='name-input' />
                    <br/>
                    <label htmlFor='size'>Size: </label>
                    <select name='size' id='size-dropdown' >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option><option value='x-large'>X-Large</option>
                    </select>
                    <br/>
                    <button id='order-button'>Add to Order</button>
                </form>
            </div>
        )
    
}


