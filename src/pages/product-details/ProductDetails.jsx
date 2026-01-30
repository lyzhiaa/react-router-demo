import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {
    const {id} = useParams();
    console.log("id :", id)
  return (
    <div className='text-5xl text-amber-400'>This is the details of product: {id}</div>
  )
}
