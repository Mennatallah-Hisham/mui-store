import React from 'react';
import { useTheme ,useMediaQuery, Grid } from '@mui/material';


import { products } from '../../data';
import ProductCard from './ProductCard';

const Products = () => {
    const theme=useTheme();
    const matches = useMediaQuery(
        theme.breakpoints.down("md")
    ) ;
    const renderProducts = products.map(
        product=><Grid 
        item
        xs={12} sm={6} lg={4} xl={3}
        display='flex'
        flexDirection='column'
        alignItems='center'
        key={product.id}
        >

        <ProductCard product={product} matches={matches}></ProductCard>
        
         
        </Grid>
    )
  return (
   
        <Grid container 
        spacing={{xs:5 , md:7}}
        sx={{mt:5}}>
        {renderProducts}

        </Grid>
  
  )
}

export default Products;