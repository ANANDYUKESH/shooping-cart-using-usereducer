import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {useState,useReducer} from 'react';

import Shirt from './image/n5.jpg';
import Shirt1 from './image/n6.jpg';
import Shirt2 from './image/n7.jpg';
import Shirt3 from './image/n8.jpg';



const initialState = { count: 0 };




function Welcome(state, action) {
  switch (action.category) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset': 
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Shop = () => {
    const [state, dispatch] = React.useReducer(Welcome, initialState);

  return (
    <div>

        <div className="container">

            <h1 className='text-center' >Happy Shopy</h1>


           <div className="row">
                <div className="col">
                <div class="card " >
                <img src={Shirt} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹300
                    </li>
                </ul>
               
            </div>

                                        

                </div>
                <div className="col">
                <div class="card " >
                <img src={Shirt1} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹120/Kg
                    </li>
                </ul>
               
            </div>

                </div>
                <div className="col">
                <div class="card " >
                <img src={Shirt2} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Double pocket shirt</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                   
                </ul>
               
            </div>

                </div>
           </div>




        </div>





      
    </div>
  )
}
export default Shop;
