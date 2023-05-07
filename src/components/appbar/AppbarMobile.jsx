import React from 'react';
import { AppBar, IconButton,Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Actions } from './Actions';
import { useUiContext } from '../../context/context';



export const AppbarMobile = ({matches}) => {
    const {drawerOpen,setDrawerOpen}=useUiContext();

  return (
    <AppBar position="static">
        <Toolbar sx={{justifyContent:"space-between" , alignItems:"center"}}>

    
    <IconButton color="inherit" onClick={()=>{setDrawerOpen(true)
    }}>
        <MenuIcon/>

    </IconButton>
    {/* <MyList type="row">
    

        <ListItemText primary="Home"/>
        <ListItemText primary="Categories"/>
        <ListItemText primary="Products"/>
        <ListItemText primary="Contact us"/>
       
    </MyList> */}

           
    {/* <IconButton color="inherit">
        <SearchIcon/>

    </IconButton> */}

    
  


<Actions matches={matches}/>

    </Toolbar>



</AppBar>
  )
}
