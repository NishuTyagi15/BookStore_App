import React from 'react';
import CartBag from './CartBag';

const CartDisp = (props) => {

    const cartBagDetails=(cart)=>{
        return(<CartBag value={cart} />)
    }

    return (
        <div>
            {props.val.map((cartBagDetails))}
        </div>
    );
}

export default CartDisp;