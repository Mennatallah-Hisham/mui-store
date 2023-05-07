
import { styled ,Box, TextField} from "@mui/material";
import { Colors } from "../theme";


export const SearchBoxContainer = styled(Box)(()=>({

position:'absolute',
top:0,
left:0,
width:'100%',
height:'100%',
background:Colors.primary,
color:Colors.white,
display:'flex', 
justifyContent:'center',
alignItems:'center',
zIndex:99999,
opacity:'0.9',


}));

export const SearchField = styled(TextField)(({theme})=>({
    ".MuiInputLabel-root":{
        color:Colors.white,
     

    },

        ".MuiInput-root":{
            color:Colors.white,
fontSize:'1rem',
[theme.breakpoints.up("md")]:{

    fontSize:"1.5rem",
}

        },

        ".MuiInput-root::before":{
            borderBottom:`1px solid ${Colors.white}`
        },
        padding:"1rem  2rem"

}))