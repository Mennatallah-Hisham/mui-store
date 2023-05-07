import React from "react";
import {
  Drawer,
  List,
  styled,
  ListItemText,
  ListItemButton,
  Divider,
  Button,

} from "@mui/material";
import {Close} from"@mui/icons-material";
import { useState } from "react";
import { useUiContext } from "../../context/context";

const ListButton = (props)=>(
  <ListItemButton sx={{my:1 ,paddingLeft:4}}>{props.children}</ListItemButton>
);
const AppDrawer = () => {


  const {drawerOpen,setDrawerOpen}=useUiContext();
  function closeDrawerHandler(){
    setDrawerOpen(false);
  }
  return (
    <Drawer open={drawerOpen} sx={{ p:5,color:'#247749' }}>
   
      <List>
      <Button variant='contained' onClick={closeDrawerHandler}>
      <Close/>
      </Button>
        <ListButton>
          <ListItemText>Home</ListItemText>
        </ListButton>
        <Divider />
        <ListButton>
          <ListItemText>Products</ListItemText>
        </ListButton>
        <Divider />
        <ListButton>
          <ListItemText>Categories</ListItemText>
        </ListButton>
        <Divider />
        <ListButton>
          <ListItemText>About us</ListItemText>
        </ListButton>
        <Divider />
        <ListButton>
          <ListItemText>Contact us</ListItemText>
        </ListButton>
        <Divider />
      </List>
    </Drawer>
  );
};

export default AppDrawer;
