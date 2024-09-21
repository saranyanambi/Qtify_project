import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import axios from 'axios';
import { useState,useEffect } from 'react';
import styles from '../Section/Section.module.css';
import CardComponent from '../Card/Card';
import Carouselcomponent from '../Carousel/Carousel';
import styless from './Songs.module.css';
import { border } from '@mui/system';

const Songs=()=>{
    const[song,setSong]=useState([]);
    const[genre,setGenre]=useState([]);
    const[selectedgenre,setselectedgenre]=useState("All");
    const[filtersong,setFiltersong]=useState([]);

    useEffect(()=>{
        const fetchsongs=async()=>{
            try{
            let res=await axios.get("https://qtify-backend-labs.crio.do/songs")
            console.log(res.data)
            setSong(res.data)
            setFiltersong(res.data)

            let resgenre=await axios.get("https://qtify-backend-labs.crio.do/genres");
            console.log(resgenre.data)
            setGenre(["All",...resgenre.data.data])
        }
        catch(e){
            console.log(e);
        }
    }

        fetchsongs()

    },[])

    const handleonchange=(e,newValue)=>{
        setselectedgenre(newValue)
       if(newValue==='All')
            setFiltersong(song)
        else
            setFiltersong(song.filter((item)=>item.genre.key===newValue))
    }


    return(
       <Box component='Section' className={styles.sectionContainer} sx={{border:"5px green"}}>
        <div>
        <h2>Songs</h2>
        </div>
        <div className={styles.sectionHeader}>
            <Box>
        <Tabs value={selectedgenre} onChange={handleonchange} aria-label="songs genre tabs" TabIndicatorProps={{style: {backgroundColor: "#00e676"}}}>
           {genre.map((item,index)=>(
            <Tab key={index} label={typeof(item)==='object'?item.label:"All"} id={item.key} value={typeof(item)==='object'?item.key:"All"} style={{color:"white"}}/>
           ))}
        </Tabs>

        <div>
           <Carouselcomponent items={filtersong} renderCard={(item) => (
            <CardComponent
                key={item.id}
                albumImage={item.image}
                albumName={item.title}
                likes={item.likes}
              
            />
        )} />
        </div>
        </Box>
        </div>
        
       </Box>

    )
}
export default Songs