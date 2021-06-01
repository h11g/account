import React from 'react'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import { increment, decrement, incrementAsync, decrementAsync } from 'src/redux/counter/reducer'

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementAsync())
        }}
      >
        Increment after 1 second
      </button>
      <button
        onClick={() => {
          dispatch(decrementAsync())
        }}
      >
        Decrement after 1 second
      </button>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
      <hr />
      <div>Clicked: {count} times</div>
    </div>
  )
}

export default Counter
