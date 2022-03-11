import React from 'react'
import "./Cart.css"

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClear }) => {

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0);

    return (
        <div className='cartItems'>
            <h4 className='cartItemsHeader'>Products in your cart</h4>
            <div className='cartClear'>
                {cartItems.length >= 1 && (
                <button className='cartClearBtn' onClick={handleCartClear}>Remove Cart</button>
                )}

            </div>



            {cartItems.length === 0 && (
                <div className='cartItemsEmpty'>Cart is empty</div>
            )}
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cartItemsList">
                        <img 
                          className='cartItemsImg' 
                          src={item.image} 
                          alt={item.name} />
                
                    <div className='cartItemsName'>{item.name}</div>

                    <div className='cartItemsFunc'>
                        <button className='cartItemsAdd' 
                        onClick={() => handleAddProduct(item)}>+</button>

                        <button className='cartItemsRemove' 
                        onClick={() => handleRemoveProduct(item)}>-</button>

                    </div>

                      <div className='cartItemsPrice'>
                          {item.quantity} * {item.price} TRY
                      </div>  




                    </div>
                ))}
            </div>
            
            <div className='cartItemsTotalPriceName'> Total:&nbsp;&nbsp; 
                         <div className='cartItemsTotalPrice'>
                           {totalPrice.toFixed(2)} TRY
                         </div>
                      </div>

        </div>



    );
};

export default Cart