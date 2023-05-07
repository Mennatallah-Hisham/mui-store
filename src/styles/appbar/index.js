import {styled} from "@mui/material/styles";
import { List , Box } from "@mui/material";
import { Colors } from "../theme";



export const MyList = styled(List)(({type})=>(
    {
display:type==='row'? 'flex' : 'block',
justifyContent:"center",
alignItems:"center",
gap:"0.5em",
color:Colors.white,

    }
));

export const ActionIconsContainerMobile = styled(Box)(()=>({
 display:'flex',

    background:Colors.primary,

  
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    zIndex:99,
    borderTop:`1px solid ${Colors.border}`,
 


}));
export const ActionIconsContainerDesktop = styled(Box)(()=>({
    flexGrow:0,
 


}));