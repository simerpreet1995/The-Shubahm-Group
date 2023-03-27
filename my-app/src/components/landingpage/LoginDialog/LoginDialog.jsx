import { Button, Dialog, TextField, Typography, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Component = styled(Box)`
    height: 70vh;
    widhth: 90vw;
    border: 5px solid #ccc;

`

const Image = styled(Box)`
    background: rgb(150, 60, 60) url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 100%;
    width: 40%;
    padding: 45px 35px;
    color: #fff;

    & p {
        padding: 1rem 0;
    }
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    align-item: center;
    // justify-content: center;
    width: 60%;

    & div {
        margin-bottom: 7px;
    }
`

const Calling = styled(Box)`
    // text-align: center;
    margin-top: 2rem;
   
    & a{
        text-decoration: none;
        color: green;

    }
`

const CloseButtonWrapper = styled(Box)`
    position: absolute;
    top: 0px;
    right: 0;
    cursor: pointer;
    `


function LoginDialog({open, setOpen}) {

    const handleClose = () => {
        setOpen(false)
    }
  return (
      <Dialog open={open} onClose={handleClose}
      sx={{maxWidth: "unset"}}
      
      >            
            <Component>
                <Box style={{display: "flex", height: "100%"}}>
               <Image>
                <Typography variant='h5'>Contact Form</Typography>
                <Typography>Please Fill the contact form to know more about our products we wiill happy to help you</Typography>
                </Image> 
               
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
                <Button style={{background: "rgb(150, 60, 60)" , width: 30}} variant='contained'>Submit</Button>
               
               <Calling>
               <a href="tel:+123456789">Click To Call</a>
               </Calling>

                </Wrapper> 
               
                </Box>
            </Component>

            <CloseButtonWrapper>
       <IconButton
             edge="start"
           
             onClick={handleClose}
             aria-label="close"
          >
           <CloseIcon/>
           </IconButton>
       </CloseButtonWrapper>


      </Dialog>
  )
}

export default LoginDialog
