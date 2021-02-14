import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CustomHook = () => {
         const { state, increment, decrement, reset } =  useCounter();
         return (
                  <>
                           <h1>Counter with CustomHook { state }</h1>
                           <hr/>
                           <div className = "btn-wrapper">
                                    <button className = "btn" onClick = { increment }>+1</button>
                                    <button className = "btn" onClick = { reset }>Reset</button>
                                    <button className = "btn" onClick = { decrement }>-1</button>
                           </div>
                  </>
         )
}
