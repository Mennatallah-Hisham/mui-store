import { styled,Box,IconButton,Button } from "@mui/material";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";

export const Product= styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
alignItems:'center',
textAlign:'center',

width:"100%",
overflow:'hidden',
[theme.breakpoints.up("md")]:{
    position:'relative',
}

}));

export const ProductImg =styled('img')(({src,theme})=>({
    src:`url(${src})`,
    height:"18rem",
    maxWidth:'100%',
    backgroundColor:Colors.light_gray,
    padding:'0.8rem',
    [theme.breakpoints.down("md")]:{
        width:'80%',
        padding:'2rem',
    }



}));

export const ProductActionButton=styled(IconButton)(()=>({
    background:Colors.white,
    margin:4

}));
export const ProductFavButton=styled(ProductActionButton,{shouldForwardProp:(prop)=>prop !=='isfav'})(({isfav,theme})=>({

    color:isfav?Colors.primary:Colors.light,
    // [theme.breakpoints.up("md")]:{
    //     position:"absolute",
    //     right:0,
    //     top:0
    // }
}));

export const ProductAddToCart=styled(Button,{
    shouldForwardProp:(prop)=>prop !=="show"
})(({show,theme})=>({
width:'130px',
fontSize:'0.9rem',
fontWeight:"700",
color:Colors.primary,

// [theme.breakpoints.up('md')]:{
//     position:'absolute',
//     bottom:"2%",
//     width:'300px',
//     padding:'1rem 0.5rem',
//     animation:show && `${slideInBottom} 0.5s bottom `

// },
background:Colors.secondary,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding:"1rem",
   
    display: "flex",
   justifyContent:'space-between',
   gap:"3rem",
alignItems:"flex-end",

  }));
  
  export const ProductActionsWrapper = styled(Box,{
    shouldForwardProp:(prop)=>prop !=="show"
  })(({ show, theme }) => ({ 
    // [theme.breakpoints.up("md")]: {
    //   display: show ? 'visible' : 'none',
    //   position: "absolute",
    //   right: 0,
    //   top: '20%',
    //   animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    // }
  }));