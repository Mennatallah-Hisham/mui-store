import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material';
import {Slide} from "@mui/material";
import {Close} from "@mui/icons-material";
import { ProductImg } from '../../styles/products';

const Transition = React.forwardRef((props,ref)=><Slide direction="down" ref={ref} {...props}/>)


const ProductDetails = ({open,onClose,product}) => {

  return (
   <Dialog
   open={open}
   onClose={onClose}
   TransitionComponent={Transition}
   variant="permanent"
   fullScreen
   >
    <DialogTitle>
        {product.title}
    </DialogTitle>
    <DialogContent>
        <IconButton onClick={()=>{onClose()}}>
            <Close/>
        </IconButton>
    
            hellllo
            <img src={product.image}/>
        <Typography>
                {product.name}
            </Typography>
            <Typography>
            {product.description}
            </Typography>
            <Typography>
            {product.price}
            </Typography>
        
            
         
   
    </DialogContent>
   </Dialog>
  )
}

export default ProductDetails