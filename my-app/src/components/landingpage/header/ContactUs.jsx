import { Box, Button, TextField, Typography, styled } from '@mui/material'
import React from 'react'


const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    align-item: center;
    justify-content: center;
    width: 60%;
    border: 2px solid ;
    & div {
        margin-bottom: 7px;
    }
`

const Calling = styled(Box)`
    text-align: center;
    margin-top: 2rem;
   
    & a{
        text-decoration: none;
        color: green;

    }
`


function ContactUs() {
  return (
    <>
  
               
               <Wrapper>
                <Typography>The Shubham Group </Typography>
                <Typography>Okhala Dellhi</Typography>
                <Typography>Contact US Now !</Typography>
                <TextField variant='standard' label="Name"></TextField>
                <TextField variant='standard' label="Email"></TextField> 
                <TextField variant='standard' label="Mobile"></TextField> 
                
                <Box component="form" sx={{
        '& .MuiTextField-root': {  width: "100%" },
      }}
      noValidate
      autoComplete="off">
         <div>
      
        <TextField
          id="outlined-multiline-static"
          label="Comments... "
          multiline
          rows={6}
          placeholder="Write you query here"
        />
      </div>

      </Box>
                <Button variant='contained'>Submit</Button>
               
               <Calling>
               <a href="tel:+123456789">Click To Call</a>
               </Calling>

                </Wrapper> 

    
    </>
  )
}

export default ContactUs