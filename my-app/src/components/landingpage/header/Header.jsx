import React, { useState } from 'react'
import './Header.css'
import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import { NavLink } from 'react-router-dom'
import LoginDialog from '../LoginDialog/LoginDialog';





function Header() {
    

    const [open,setOpen] = useState(false)

const openDialog = () => {
  setOpen(true);
}
//  for login pop up dialog

  return (
    <div className="container">
        
        <AppBar sx={{background: "#232f3d", boxShadow: "2px 4px 1em #535d68"}} position="fixed">
        <Toolbar>
            <Typography>
                Icon
                
            </Typography>

           

            <Box className="navbars">
                <ul>
                    <li>
                        <NavLink className={"navbar-link"} to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={"navbar-link"} to={'/about'}>About</NavLink>
                    </li> <li>
                        <NavLink className={"navbar-link"} to={'/team'}>Team</NavLink>
                    </li> <li>
                        <NavLink className={"navbar-link"} to={'/masterpiece'}>Masterpiece</NavLink>
                    </li> <li>
                        <NavLink className={"navbar-link"} to={'/join-us'}>Join</NavLink>
                    </li> 
                    <li>
                        <NavLink style={{border: "none", textDecoration: "none", color: "rgb(150, 60, 60)"}} onClick={()=> openDialog()}  >Contact</NavLink>
                    </li>


                    <li>
                        <NavLink className={"navbar-link"} to={'/blogs'}>Blogs</NavLink>
                        
                    </li>
                </ul>
            </Box>

            <LoginDialog open={open} setOpen={setOpen}/>


        </Toolbar>
        </AppBar>

    </div>
  )
}

export default Header