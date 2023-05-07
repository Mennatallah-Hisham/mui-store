import React from 'react';
import { Grid,Box, Typography, ListItemText ,List } from '@mui/material';
import { FooterTitle } from '../../styles/footer';
import { Colors } from '../../styles/theme';
import {Facebook , Twitter,Instagram} from"@mui/icons-material";

const Footer = () => {
  return (
 <Box sx={{background:Colors.shaft,
 color:Colors.white,
 
 marginTop:'3rem',
 p:{xs:4,md:10},
 fontSize:{xs:'12px',md:'14px'}
}}
 >
    <Grid container spacing={4} justifyContent="center">
    <Grid item md={6} lg={4} sx={{textAlign:'center'}}>
        <FooterTitle>About us</FooterTitle>
        <Typography variant="caption2" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates magni quod molestias et id temporibus, molestiae nulla ea doloribus cum accusamus </Typography>

        <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates magni quod molestias et id temporibus, molestiae nulla ea doloribus cum accusamus
             </Typography>
        <Box sx={{

mt:1,
        }}>
            <Facebook sx={{mr:1}}/>
            <Twitter sx={{mr:1}}/>
            <Instagram/>
        </Box>

        </Grid>

        <Grid item md={6} lg={2}>
        <FooterTitle> information</FooterTitle>
      <List>
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
                Order Tracking

            </Typography>
        </ListItemText>
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
             privacy & policy

            </Typography>
        </ListItemText>
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
              terms and conditions

            </Typography>
        </ListItemText>
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
                Order Tracking

            </Typography>
        </ListItemText>
      </List>

        </Grid>
<Grid item md={6} lg={2}>
    <FooterTitle>
        My account
    </FooterTitle>
    <List>
       
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
            profile

            </Typography>
        </ListItemText>
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
             cart

            </Typography>
        </ListItemText>
        <ListItemText>
            <Typography variant="caption2" lineHeight={2}>
             wishlist

            </Typography>
        </ListItemText>
      </List>

</Grid>
     

    </Grid>
    </Box>
  )
}

export default Footer;