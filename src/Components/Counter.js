import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './CounterAction';
const Counter = () => {
    const dispatch= useDispatch();
    const counter = useSelector(state=>state.counter)  
  return (
    <div className='counter-app'>
       <div className='container'>
       <h1>Counter Application</h1><br/>
   
       
       <div>
       <button className="increment" onClick={() => dispatch(Increment())}>
          Increment
        </button>
        <button className="decrement" onClick={() => dispatch(Decrement())}>
          Decrement
        </button>
      <span>{counter}</span>
       </div>
       </div>
    </div>
  )
}

export default Counter