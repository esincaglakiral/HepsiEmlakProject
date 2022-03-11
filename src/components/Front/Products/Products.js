/* eslint-disable no-undef */
import React from 'react'
import "./Products.css"

const Products = ({ productItems, handleAddProduct }) => {
    return (
        <div className="products">
            {productItems.map((productItem) => (
                <div className='card'>
                    <div>
                        <img className='productImg' src={productItem.image} alt={productItem.name} />

                    </div>

                    <div>
                        <h3 className='productName'>{productItem.name}</h3>
                    </div>

                    <div className='productPrice'>
                        {productItem.price}&nbsp;
                        {productItem.currency}
                    </div>

                    <div>
                        <button className='productAddBtn' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                    </div>


                </div>
            ))}

        </div>
    )
}

export default Products