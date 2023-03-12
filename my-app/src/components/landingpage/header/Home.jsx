import Carousel from 'react-multi-carousel'
import { bannerData } from '../../constants/data';
import styled from '@emotion/styled';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, CardMedia, CardContent, CardActionArea, Card, Dialog } from '@mui/material';

import BackgroundImg from "../../../images/background-video.mp4";
import "./Home.css";
import Logo from '../../../images/logo-the-shubham.png'
import {cardData} from '../../constants/card'






const Image = styled('img')({
  width: '100%',
  height: '88vh'

})


const CardImage = styled('img')({
  width: '100%'
})




const responsive = {
    
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Home() {

  return (
    <Box className="main-container">

<Box className="banner">
      <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        autoPlaySpeed={3000}
        customTransition="all .2"
        transitionDuration={500}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"

        >
            {
                bannerData.map((data, idx) =>(
                  <Box key={idx}>
                    <Image src={data.url} alt="banner image" />
                    </Box>
                ))
            }
        </Carousel>

      </Box>
        {/* banner ends here */}







      <Box className="main">

      <Box className="video-text">
            
            <Typography variant='h4'>At Omaxe, we envision creating a better tomorrow for India, and in order to turn that vision into reality, we have worked relentlessly since 1987 to provide world-class real estate services for people.</Typography>

            <Typography>The brand ‘Omaxe’ was founded in 1987 by visionary first-generation entrepreneur & civil engineer Mr. Rohtas Goel to undertake construction and contracting business. Subsequently, the company diversified into the real estate sector in 2001 and got listed on both stock exchanges (BSE and NSE) in 2007.</Typography>
          </Box>
        <Box className="video-bg">
          <video src={BackgroundImg} autoPlay loop muted />

          
        </Box>

        {/* <Box className="logo">
          <img src={Logo} alt="logo" />
        </Box> */}

      </Box>
            {/* video ends here */}
      




            <Box className="hot-selling-project">
              <Typography variant='h2'>HOT SELLING PROJECTS</Typography>

              </Box>
            <Box className="card-container">
             

{
                cardData.map((data, idx) =>(
                  <Box key={idx} className="card-wrapper">

                    <CardImage src={data.url} alt="banner image" />
                    <Box className="typography-wrapper">

                      <Box className="card-heading">
                    <Typography variant='h5'>{data.heading}</Typography>
                    </Box>

                    <Typography variant='h6'>{data.area}</Typography>
                    <Typography>{data.type}</Typography>
                    <Typography>{data.price}</Typography>
                    <Typography>{data.ready}</Typography>
                    <button>{data.button}</button>
                    </Box>
                    {/* card wrapper ends here */}
                    </Box>
                ))
            }
</Box>
{/* card container end here */}




    </Box>
  );
}



export default Home;
