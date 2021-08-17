import React from 'react'

export default function Order(props) {
    
    return (
        <div>
            <h1>Your Order {props.order.name}:</h1>
            <h2>1 {props.order.size} Pizza</h2>
            <h3>Toppings</h3>
            <ul>
                <li>{props.order.pepperoni && "Pepperoni" }</li>
                <li>{props.order.mushroom && "Mushroom" }</li>
                <li>{props.order.ham && "Ham" }</li>
                <li>{props.order.extraCheese && "Extra Cheese" }</li>
            </ul>
   
                <h3>Special Request</h3>
             <p>{props.order.special}</p>



            
        </div>
    )
}
