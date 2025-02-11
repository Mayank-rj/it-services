"use client";

import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/slice/counterslice";

export const Count = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (

    <div><h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button></div>
  )
}
