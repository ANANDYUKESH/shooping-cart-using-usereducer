import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { useReducer } from 'react';

import Shirt from './image/n5.jpg';
import Shirt2 from './image/n7.jpg';
import Shirt3 from './image/n8.jpg';

const initialState = { count: 0 };
function welcome(state, action) {
  switch (action.category) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case 'reset':
      return { count: 0 };
    default:
       throw new Error("Error occurs");
           }
}

const SingleProduct = ({ imgSrc, product, price }) => {
  const [state, dispatch] = useReducer(welcome, initialState);

  return (<>
    <div className='content'>
      <div className='product'>
        <img src={imgSrc} alt={product} />
        <h1>{product}</h1>
        <h3>₹ {price}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="cart">
        <button onClick={() => dispatch({ category: 'increment' })}>+</button>
        <input type="number" name="count" value={state.count} readOnly />
        <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ category: 'reset' })}>Reset </button>
      </div>
      <h2>Total: ₹{state.count * price}</h2>
    </div>
    </>
  );
}
const Shop = () => {
  return (
    <div className='App'>
      <SingleProduct imgSrc={Shirt} product="Denim Shirt" price={500} />
      <SingleProduct imgSrc={Shirt2} product="Double pocket Shirt" price={700} />
      <SingleProduct imgSrc={Shirt3} product="Party Shirt" price={800} />
    </div>
  );
}

export default Shop;

