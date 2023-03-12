import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './About.css'

function About() {
  return (
    <Box className='about'>
      
      <Box className="about-box">
      <Typography variant='h2'>ABOUT US</Typography>
      </Box>

      <Box className="box-typography">
      <Typography><span className='company-name'>Shubham Build Up Pvt. Ltd. </span> was established in 2009 as a real estate company based in Delhi India.
      </Typography>
      </Box>

      
      <Box className="box-typography">
    <Typography>
    With the vast aim to provide second homes in the lap of nature and in spiritual destinations with a premium living experience in serene surroundings, these homes are ideal as getaways, holidays and for the perfect retirement, a gift for parents.
    </Typography>
    </Box>


    <Box className="box-typography">
    <Typography>
    The company aim to cater to those customers who already have their first home but are looking for a richer quality of life away from the chaos and pollution of cities.
    </Typography>
    </Box>

    
    <Box className="box-typography">
    <Typography>
    In 2009, the company started with three residential projects in the name of <span className='company-name'> Indus valley Mukteshwar Nainital, Ambika Divinity Haridwar and Indus valley Shimla </span> which have been delivered successfully with 200% property growth.
    </Typography>
    </Box>

    
    <Box className="box-typography">
    <Typography>
    In a less span of time, the company marked their success in residential projects and entered other fields such as <span className='company-name'> Collaboration, Construction </span> and <span className='company-name'> Resorts.</span> To manage this expansion Shubham Buildup P Ltd converted into <span className='company-name'> THE SHUBHAM GROUP OF COMPANIES (TSGC Delhi). </span>
    </Typography>
    </Box>


    <Box className="box-typography">
    <Typography>
      TSGC Delhi holds the following companies under itself.
      </Typography>
      </Box>


      <Typography><span className='company-name'>➤Shubham Build Up LTD</span></Typography>
      <Typography><span className='company-name'>➤Shubham Buildtech LLp</span></Typography>
      <Typography><span className='company-name'>➤Shubham Buildstone LLP</span></Typography>
      <Typography><span className='company-name'>➤Shape My House</span></Typography>
      <Typography><span className='company-name'>➤Chail Height Villas LLP</span></Typography>
      <Typography><span className='company-name'>➤Chail Height Resorts LLP</span></Typography>
      <Typography><span className='company-name'>➤Nirmanam Realtors LLP</span></Typography>


    </Box>
    
  )
}

export default About