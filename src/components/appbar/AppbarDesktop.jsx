import { AppBar, IconButton, Typography,ListItemText, Toolbar, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react';
import { MyList } from '../../styles/appbar';

import SearchIcon from '@mui/icons-material/Search';
import { Actions } from './Actions';


export const AppbarDesktop = ({matches}) => {
 
  return (
    <div>
        <AppBar position="static" sx={{px:2}}>
            <Toolbar sx={{justifyContent:"space-between" , alignItems:"center"}} >

        
          
            <Typography variant='p'>my store</Typography>

            <MyList type="row">
    

<ListItemText primary="Home"/>
    <ListItemText primary="Categories"/>
    <ListItemText primary="Products"/>
    <ListItemText primary="Contact us"/>





{/* 
    <ListItemButton>
        <ListItemIcon>

        <SearchIcon/>
        </ListItemIcon>
    </ListItemButton> */}
   
           </MyList>
      

           <Actions matches={matches}/>
    
</Toolbar>

        </AppBar>
      
        </div>
  )
}
