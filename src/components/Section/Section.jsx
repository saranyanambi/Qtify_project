import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardComponent from '../Card/Card'
import styles from '../Section/Section.module.css';
import Carouselcomponent from '../Carousel/Carousel';

const Section=({link,title})=>{
    const [card,setCard]=useState([]);
    const [toggle,setIstoggle]=useState(true);
    console.log(card);

    useEffect(()=>{
        console.log("hi")
        const fetchcard=async()=>{
            try{
                let res=await axios.get(link);
                console.log(res.data)
                setCard(res.data)
                console.log("card",card)
            }
            catch(e){
                console.log(e)
               
            }
        }
        fetchcard();
    },[])

    useEffect(() => {
        console.log("Updated card state:", card);
    }, [card]);
    return(
        <Box className={styles.sectionContainer}>
        <Box className={styles.sectionHeader}>
            <h2>{title}</h2>
            <button onClick={()=>setIstoggle(!toggle)} className={styles.collapseButton}>
                {toggle? 'Carousel' :'Show all'}</button>
        </Box>
        {
            toggle?(<Carouselcomponent items={card} renderCard={(item) => (
                <CardComponent
                    key={item.id}
                    albumImage={item.image}
                    albumName={item.title}
                    follows={item.follows}
                    description={item.description}
                />
            )} />
            ):(
            <Box className={styles.cardGrid}>
           {card.map((item)=>(
            <CardComponent 
            key={item.id}
            albumImage={item.image}
            albumName={item.title}
            follows={item.follows}
            description={item.description}
/>))}
            </Box>)}
        </Box>
        
        
    )
}

export default Section