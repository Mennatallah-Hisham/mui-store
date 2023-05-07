import { Typography } from '@mui/material';
import { ProductMetaWrapper } from '../../styles/products';
import React from 'react'

const ProductMeta = ({product,matches}) => {
  return (
   <ProductMetaWrapper>
    <Typography variant={matches?'h6':'h5'} >
        {product.name}
        </Typography>
    <Typography variant={matches?'body1':'body2'}
    sx={{fontSize:"1.2rem"}} >
        {product.price}
        </Typography>
    </ProductMetaWrapper>
  )
}

export default ProductMeta