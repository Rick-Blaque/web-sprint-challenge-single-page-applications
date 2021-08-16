import React from 'react'

export default function Order(props) {
    console.log(props);
    return (
        <div>
            <h1>Your Order {props.order.name}:</h1>
    <h2>1 {props.order.size} Pizza</h2>
   
    <h3>Special Request</h3>
    <p>{props.order.special}</p>



            
        </div>
    )
}
