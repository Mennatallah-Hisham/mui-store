
import { Colors } from "../theme";
import {styled} from "@mui/material/styles";
import { Box, Typography,Button } from "@mui/material";


export const BannerContainer =styled(Box)(({theme})=>({
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    padding:'0px 0px',
    background:Colors.light_gray,
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        alignItems:'center',
    }

}))

export const BannerContent = styled(Box)(()=>({
    padding:"3rem 1.5rem",
    

}));

export const BannerTitle = styled(Typography)(({theme})=>(
    {

        lineHeight:1.5,
        marginBottom:'1.5rem',
        fontSize:'4rem',
        textTransform:'capitalize',
        [theme.breakpoints.down("md")]:{
            fontSize:"2rem",
        }
    }
))

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight:1.45,
    letterSpacing:1.25,
    marginBottom:"2rem",
    maxWidth:"40rem",
    [theme.breakpoints.down("md")]:{
     
        letterSpacing:1.15,
        marginBottom:"1rem",
    }

}));

export const BannerImage = styled('img')(({src,theme})=>({
    src:`url(${src})`,
   
    maxWidth:'100%',
    [theme.breakpoints.up("md")]:{
        width:"30rem",
    
    },
    [theme.breakpoints.up("lg")]:{
        width:"50rem",
    
    }
  

}));

export const BannerShopButton = styled(Button,{
    shouldForwardProp:(prop)=>prop !=='color',
    name:"MyShopButton",
    slot:"Root",
    overridesResolver:(props,styles)=>[
        styles.root,
        props.color ==='primary' && styles.primary,
        props.color ==='secondary' && styles.secondary,
],
})(({theme})=>({
    padding:'1rem 8rem',
    color:Colors.white,
    fontWeight:'bold',
    fontSize:"1rem",
    [theme.breakpoints.down("sm")]:{
        fontSize:"0.8rem"
    }





}));