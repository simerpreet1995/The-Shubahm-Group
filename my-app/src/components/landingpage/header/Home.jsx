import { Box, Grid, Typography, styled} from '@mui/material';

import BackgroundImg from "../../../images/background-video.mp4";
import "./Home.css";
import Logo from '../../../images/logo-the-shubham.png'
import {cardData} from '../../constants/card'
import CardContainer from './CardContainer';






const Image = styled('img')({
  width: '100%',
  height: '92vh',
  marginTop: 4

})


const CardImage = styled('img')({
  width: '100%'
})






function Home() {

  return (
    <Box className="main-container">







      <Box className="main">
            <Grid container>

            <Grid item xs={12} md={8} >
      <Box className="video-text">
            
            <Typography variant='h6'>At Omaxe, we envision creating a better tomorrow for India, and in order to turn that vision into reality, we have worked relentlessly since 1987 to provide world-class real estate services for people.</Typography>

            <Typography>The brand ‘Omaxe’ was founded in 1987 by visionary first-generation entrepreneur & civil engineer Mr. Rohtas Goel to undertake construction and contracting business. Subsequently, the company diversified into the real estate sector in 2001 and got listed on both stock exchanges (BSE and NSE) in 2007.</Typography>
          </Box>
          </Grid>


            <Grid item xs={12} md={4}>
        <Box className="video-bg">
          <video src={BackgroundImg} autoPlay loop muted />

           </Box>
           </Grid>
       

        </Grid>
      </Box>
      
            {/* video ends here */}
      




            <Box className="hot-selling-project">
              <Typography variant='h4'>HOT SELLING PROJECTS</Typography>

              </Box>
            <Box className="card-container">
             

{
                cardData.map((data, idx) =>(
                
                  
                  <CardContainer key={idx} url={data.url} heading={data.heading} area={data.area} type={data.type} price={data.price} ready={data.ready} button={data.button}/>

                ))
            }


                  </Box>
                  {/* card container end here */}



    </Box>
  );
}



export default Home;
