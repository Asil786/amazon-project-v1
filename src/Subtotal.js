import React from 'react';
import "./Subtotal.css";

function Subtotal() {
    return (
        <div className="subtotal">
           <p>SubTotal (0 item): <strong>0 </strong></p> 
           <small className="subtotal--gift">
           <input type="checkbox" />This order contains a gift
           </small>
           <button>Proceed to Bu</button>
        </div>
    )
}

export default Subtotal
