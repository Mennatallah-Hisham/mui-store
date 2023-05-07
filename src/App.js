import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import {Button, Container} from "@mui/material";
import { Appbar } from './components/appbar';
import { Banner } from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/context';
import SearchBox from './components/search';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <UIProvider>

      <Appbar/>
 
    <Container
    maxWidth="xl"
    sx={{p:0 , mb:{xs:5 , md:0}}}>

      <Banner/>
      <Promotions/>
      <Products/>
      <Footer/>
    

 
    </Container>
    <AppDrawer/>
    <SearchBox/>

      </UIProvider>


    </ThemeProvider>
  );
}

export default App;
