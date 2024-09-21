import styles from "./Faq.module.css"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState,useEffect } from "react";
import { Box, style } from "@mui/system";
import Arrowdown from "./Arrowdown";


const Faq=()=>{

    const[faq,setFaq]=useState([])

    useEffect(()=>{
        const fetchfaq=async()=>{
            try{
                let faqres=await axios.get("https://qtify-backend-labs.crio.do/faq")
                setFaq(faqres.data.data);
            }
            catch(e){
                console.log(e)
            }

        }

        fetchfaq();
    },[])
    return(
        <div>
        <div className={styles.faqHeader}>
          <h1>FAQs</h1>
        </div>
        <Box className={styles.faqAccordion}>
            {faq.map((item)=>(
                    <Accordion sx={{backgroundColor: 'black', color:'white',borderColor:'white',border:'1px solid',borderRadius:'5px'}}>
                    <AccordionSummary
                    expandIcon={<Arrowdown />}
                    >
                    <Typography>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'white', color:'black',borderRadius:'5px'}}>
                         <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                    </Accordion>
                 ))}
            
        </Box>
        </div>


    )
}
export default Faq 