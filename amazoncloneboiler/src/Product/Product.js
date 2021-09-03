import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <p className="product_rating">5</p>
            </div>
            <img src="https://m.media-amazon.com/images/I/81E7rTKxaNL._AC_SL1500_.jpg" alt="product" />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
