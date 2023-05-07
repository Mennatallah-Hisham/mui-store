import React from 'react'
import { IconButton, Slide,Button } from '@mui/material'
import { useUiContext } from '../../context/context'
import { SearchBoxContainer, SearchField } from '../../styles/search';

import {Close,Search} from "@mui/icons-material";
const SearchBox = () => {
    const {showSearchBox,setShowSearchBox}=useUiContext();
   
 
   
    function removeSearchBoxHandler(){
        setShowSearchBox(false);
        document.querySelector('html').style.overflow="auto";

    }
  
  return (
  <Slide direction="down" in={showSearchBox} timeout={500}>
    <SearchBoxContainer>
        
        <SearchField variant="standard" fullWidth placeholder='search....'>
      

         
        </SearchField>
        <IconButton>
                <Search
                sx={{fontSize:'2rem'}} 
                 color="secondary"/>

            </IconButton>
            <IconButton
             sx={{
                position:'absolute',top:10,right:10
            }}
            onClick={removeSearchBoxHandler}>
                <Close sx={{fontSize:'3rem'}} color="secondary"/>
            </IconButton>
    </SearchBoxContainer>
    </Slide>
  )
}

export default SearchBox