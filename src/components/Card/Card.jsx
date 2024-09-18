// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import Chip from '@mui/material/Chip';
// import styles from './Card.module.css';
// import { Box } from '@mui/system';


// const CardComponent=()=>{
//     return (
//         <Box className={styles.cart}>
//         <Card  sx={{ height: "205px", borderRadius: "10px 10px 10px 10px" }}>
          
//             <CardMedia
//               component="img"
//               image="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
//               alt="green iguana"
//               sx={{width: '100%',
//                 height: '170px',
                
               
//                 }}
//             />
//             <CardContent  sx={{ padding: "8px" }}>
//             <div >
//                <Chip label="Chip Filled" size="small"   sx={{
//               width: "auto",
//               height: "23px",
//               position:'absolute',
//               Top: "176px",
//               borderRadius: "10px",
//               padding: "4px 8px 4px 8px",
//               backgroundColor: "black",
//               fontFamily: "Poppins",
//               fontSize: "10px",
//               fontWeight: 400,
//               textAlign: "center",
//               lineHeight: "15px",
//               color: "rgba(255, 255, 255, 1);",
//             }}
//             />
//             </div>
//             </CardContent>
//          <Typography variant="h6" component="div"  sx={{
//           width: "auto",
//           height: "27px",
//           fontFamily: "Poppins",
//           fontSize: "14px",
//           fontWeight: 400,
//           lineHeight: "21px",
//           textAlign: "left",
//           marginTop: "5px",
//           color: "rgba(255, 255, 255, 1)",
//         }} >
//              Lizards 
//               </Typography>
           
          
//         </Card>
//         </Box>
//       );
// }



// export default CardComponent;





import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import styles from "../Card/Card.module.css";
import { positions } from "@mui/system";

const CardComponent = ({ albumImage, albumName, follows, description }) => {
  return (
    <div>
      <Card
        sx={{ height: "205px", borderRadius: "10px 10px 10px 10px", position:'relative'}}
        //     sx={{
        //       width: '159px',
        //     height: '205px',
        // /* gap: 0px; */
        //     borderRadius: '10px 10px 10px 10px',

        //     overflow: 'hidden',
        //    backgroundColor: 'rgba(255, 255, 255, 1)',

        //     }}
      >
        {/* Album Image */}
        <CardMedia
          component="img"
          image={albumImage}
          alt={`${albumName}`}
          sx={{ height: "170px", width: "100%" }}
        />

        {/* Bottom section (Album name and Follows) */}
        <CardContent
          // style={{
          //   display: 'flex',
          //   justifyContent: 'space-between',
          //   alignItems: 'center',
          //   padding: '16px',

          // }}
          sx={{ padding: "8px" }}
        >
          {/* Album Name */}

          {/* Number of Follows using Chip */}
          <Chip
            label={follows}
            size="small"
            sx={{
              width: "auto",
              height: "23px",
              position:'absolute',
              top: '176px',
              left: '6px',
              borderRadius: "10px",
              padding: "4px 8px 4px 8px",
              backgroundColor: "black",
              fontFamily: "Poppins",
              fontSize: "10px",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "15px",
              color: "rgba(255, 255, 255, 1);",
            }}
          />
        </CardContent>
      </Card>
      <Typography
        variant="h6"
        component="div"
        sx={{
          width: "auto",
          height: "27px",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "21px",
          textAlign: "left",
          marginTop: "5px",
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        {albumName}
      </Typography>
    </div>
  );
};

export default CardComponent;