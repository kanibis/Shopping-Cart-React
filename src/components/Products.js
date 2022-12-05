import React from 'react'

const Products = ({state, dispatch}) => {
    const {products, cart} = state;
  return (
    <div className='product-container'>
        {products.map((prod) => (
            <div className='products' key={prod.id}>
                <div className='product-image-container'>
                    <img src={prod.thumbnail} alt={prod.title} className='img'/>
                </div>
                <div className='product-info'>
                    <span style={{padding: 10, fontSize: 16}}>{prod.title}</span>
                    <b style={{padding: 10, fontSize: 16}}>${prod.price}</b>
                </div>
                {cart.some((p) => p.id === prod.id) ? (
                <button className='remove-from-cart'
                onClick = {() => dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod
                })}>
                    Remove from cart
                </button>
                ) : (
                <button className='add-to-cart'
                onClick = {() => dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                        id: prod.id,
                        title: prod.title,
                        thumbnail: prod.thumbnail,
                        qty: 1,
                        price: prod.price,
                    }
                })}>
                    Add to cart
                </button>
                )
                }
                
            </div>
        ))}
    </div>
  )
}

export default Products