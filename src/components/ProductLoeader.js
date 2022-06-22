import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { Skeleton } from 'react-loading-skeleton'

const ProductLoeader = () => {
  return (
    <div>
      <Skeleton count={5} />
    </div>
  )
}

export default ProductLoeader