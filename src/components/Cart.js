import React, { useState, useEffect } from 'react'

const Cart = ({state, dispatch}) => {
    const {cart} = state;
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);

    const changeQty = (id, qty) => {
        dispatch({
            type: 'CHANGE_CART_QTY',
            payload: {
                id,
                qty
            }
        })
    }
  return (
    <div className='cart-container'>
        <b className='cart'>Cart</b>
        <b className='total'>Subtotal: $ {total}</b>
        <div className='selected-products-container'>
        {cart.length > 0 ?
            (cart.map((prod)=>(
                <div className='selected-products' key={prod.title}>
                    <div className='selected-products-info'>
                        <img src={prod.thumbnail} alt={prod.title} style={{width:70, objectFit:'cover'}}/>
                        <div className='item' style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                            <span>{prod.title}</span>
                            <b>$ {prod.price}</b>
                        </div>
                    </div>
                    <div className="button-change" style={{display:'flex', alignItems:'center', gap:10}}>
                         <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                         <span>{prod.qty}</span>
                         <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                     </div>
                </div>
  ))) : (<span className="empty-cart">Empty Cart!!</span>)}
        </div>
    </div>
  )
}

export default Cart