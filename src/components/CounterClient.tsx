"use client"

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { increment, decrement, addAmount } from '@/store/slices/counterSlice'
import { Button } from '@/components/ui/button'

export default function CounterClient() {
  const value = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="p-6 border rounded-md inline-block">
      <h3 className="font-semibold">Counter (Redux)</h3>
      <div className="mt-3 flex items-center gap-4">
        <Button size="icon" onClick={() => dispatch(decrement())}>-</Button>
        <div className="text-xl font-medium">{value}</div>
        <Button size="icon" onClick={() => dispatch(increment())}>+</Button>
      </div>
      <div className="mt-3">
        <Button variant="ghost" onClick={() => dispatch(addAmount(5))}>Add 5</Button>
      </div>
    </div>
  )
}
