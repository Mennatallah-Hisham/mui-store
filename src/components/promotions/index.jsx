import React from "react";
import {
  PromotionsContainer,
  PromotionsMessage,
} from "../../styles/promotions";
import { useState, useEffect } from "react";
import { Slide } from "@mui/material";
const msgs = [
  "20% off on your first order!",
  "summer sale starts now, visit our stores ",
  " buy 2 get 2 free",
];
const Promotions = () => {
  const [msgIndex, setMsgIndex] = useState(0);
  const [show,setShow]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setShow(false);
    },2000);
    const intervalId = setInterval(() => {
      setMsgIndex(prev=>(prev+1) % msgs.length);
      setShow(true);
      setTimeout(()=>{
        setShow(false);
      },2000);
    }, 3000);

    return ()=>{
      clearInterval(intervalId);
    }
  }, []);
  return (
    <PromotionsContainer>
    <Slide 
      direction={show?"left":"right"} in={show}>
  <PromotionsMessage>{msgs[msgIndex]}</PromotionsMessage>

      </Slide> 
    
    </PromotionsContainer>
  );
};

export default Promotions;
