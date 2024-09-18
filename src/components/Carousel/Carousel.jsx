// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide ,useSwiper} from "swiper/react";
// // import 'swiper/swiper-bundle.min.css';
// // import 'swiper/swiper.min.css';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import SwiperCore from "swiper";
// import Section from "../Section/Section";
// import CardComponent from "../Card/Card";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import LeftNavButton from "../LeftNavButton/LeftNavButton";
// import RighttNavButton from "../RightNavButton/RightNavButton";
// import styles from "../Carousel/Carousel.module.css";


// const Carouselcomponent=({items=[],renderCard})=>{
//     console.log(items)
//    // const swiper = useSwiper();
//     const [isStart,setIsstart]=useState(true);
//     const [isend,setIsend]=useState(false);
//     const [swiper, setSwiper] = useState(null);

//     const handleSlideChange = (swiper) => {
//       setIsstart(swiper.isBeginning);
//       setIsend(swiper.isEnd);
//   };
    
//     return (
//       <div className={styles.carouselContainer}>
//         {/* <div><LeftNavButton className={styles.leftbtn}/></div>  */}

//         <Swiper
//           spaceBetween={50}
          
//           onSlideChange={() => handleSlideChange()}
//           onSwiper={setSwiper}
         
//           modules={[Navigation]}
//           // spaceBetween={30}
//           slidesPerView={3}
//           navigation={false}
//           breakpoints={{
//             640: {
//               slidesPerView: 3,
//               spaceBetween: 10,
//             },
//             768: {
//               slidesPerView: 4,
//               spaceBetween: 15,
//             },
//             1024: {
//               slidesPerView: 6,
//               spaceBetween: 20,
//             },
//             1440: {
//               slidesPerView: 6,
//               spaceBetween: 25,
//             },
//           }}
//           loop={false}
//         >
//        {
//         items.map((item)=>
//         (
//             <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
//         ))
//        }

//      <div className={styles.leftbtn} ><LeftNavButton onClick={() => swiper.slidePrev()} 
//                     disabled={isStart} /></div>

//      <div className={styles.rightbtn} ><RighttNavButton onClick={() => swiper.slideNext()} 
//                     disabled={isend} /></div>
          
          
//         </Swiper>
        
       
//         </div>
//       );
// }

// export default Carouselcomponent;


// Carousel.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import LeftNavButton from "../LeftNavButton/LeftNavButton"; // Adjust the path if needed
import RightNavButton from "../RightNavButton/RightNavButton";
// import  { useEffect,useRef } from 'react';
import styles from "../Carousel/Carousel.module.css";

// SwiperCore.use([Navigation]);

const Carousel = ({ items, renderCard }) => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        // spaceBetween={30}
        slidesPerView={3}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 6.5,
            spaceBetween: 25,
          },
        }}
        loop={false}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.leftbtn} ><LeftNavButton onClick={handlePrev}/></div>
      <div className={styles.rightbtn}><RightNavButton onClick={handleNext} /></div>
    </div>
  );
};
export default Carousel;