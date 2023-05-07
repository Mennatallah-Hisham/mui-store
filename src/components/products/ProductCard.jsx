import React from 'react';
import { Product,ProductActionsWrapper,ProductImg, ProductFavButton, ProductActionButton, ProductAddToCart } from '../../styles/products';
import ProductMeta from './ProductMeta';
import { Stack } from '@mui/material';
import {Favorite,Share,ShoppingCart,FitScreen} from"@mui/icons-material";
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetails from './ProductDetails';
const ProductCard = ({product,matches}) => {
  const [ProductDetailDialog,showProductDetailDialog, closeProductDetailDialog]=useDialogModal(ProductDetails
  
    );
  return (

<>
<Product>
    <ProductImg src={product.image}/>
  <ProductMeta product={product} matches={matches}/>
  <ProductActionsWrapper>
    <Stack direction="row">
      <ProductFavButton isfav={true}>
        <Favorite/>
      </ProductFavButton>
      <ProductActionButton>
        <Share color="primary"/>
      </ProductActionButton>
    
      <ProductActionButton onClick={()=>showProductDetailDialog()}>
        <FitScreen color="primary"/>
      </ProductActionButton>

    </Stack>
  </ProductActionsWrapper>

  <ProductAddToCart vartiant="contained">
Add To Cart

</ProductAddToCart>

</Product>
<ProductDetailDialog product={product}/>

</>
  )
}

export default ProductCard