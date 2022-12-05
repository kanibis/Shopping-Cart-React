import {useEffect, useReducer} from 'react'
import axios from 'axios'
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { cartReducer } from './reducers/cartReducer';
import { Header } from './components/Header';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log(state)

  const fetchProducts = async()=>{
    const {data} = await axios.get("https://dummyjson.com/products")
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Header/>
      <div className="app">
        <Products state={state} dispatch={dispatch}/>
        <Cart state={state} dispatch={dispatch}/>
      </div>
    </>
  );
}

export default App;
