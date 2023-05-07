import React from "react";
import { MyList } from "../../styles/appbar";
import { ListItemButton, ListItemIcon,Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from '../../styles/appbar';
import { useUiContext } from "../../context/context";
export const Actions = ({matches}) => {

   const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
   const {showSearchBox,setShowSearchBox}=useUiContext();
   function showSearchBoxHandler(){
    setShowSearchBox(true);
    document.querySelector('html').style.overflow="hidden";

}
  return (
    <Component>

 
    <MyList type="row"  sx={{color:"fff"}}>
    <ListItemButton>
        <ListItemIcon onClick={showSearchBoxHandler} >
          <SearchIcon  />
        </ListItemIcon>
        <Divider orientation="vertical" flexItem />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>
    
    
    </MyList>
    </Component>
  );
};
