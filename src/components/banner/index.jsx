import React from 'react'
import { useMediaQuery , } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner';

export const Banner = () => {
    const theme =useTheme();
    const matches =useMediaQuery(theme.breakpoints.down("md"));
  return (

    <BannerContainer>
      <BannerImage src="./images/banner2.png"/>

    <BannerContent>
    
      <BannerTitle>
        this is a title
      </BannerTitle>
      <BannerDescription>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam amet temporibus minima asperiores quasi quis! Labore doloremque id rerum ex repudiandae voluptates, inventore atque quas cumque est autem optio similique.
      </BannerDescription>

      <BannerShopButton color="primary">
        shop now
      </BannerShopButton>
  
    
    </BannerContent>
      </BannerContainer>

  )
}

