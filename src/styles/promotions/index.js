import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";


export const PromotionsContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        padding:'3rem 1rem',
    }
    , display:'flex',
    justifyContent:'center',
    padding:'1.2rem 0.5rem',
    overflow:'hidden',
    background:Colors.secondary,
    // [theme.breakpoints.down('md')]:{
    //  flexDirection:"column",
    //  alignItems:'center',
     
    // }
}));

export const PromotionsMessage = styled(Typography)(({theme})=>({

    fontFamily:`"Montez","cursive"`,
    [theme.breakpoints.up('md')]:{
     fontSize:'3rem',
    },
    color:Colors.white,
    fontSize:'1.5rem'

}));
