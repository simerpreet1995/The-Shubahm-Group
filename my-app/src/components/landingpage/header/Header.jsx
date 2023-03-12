import React from 'react'
import './Header.css'
import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
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
                        <NavLink className={"navbar-link"} to={'/masterpiece'}>Our Masterpiece</NavLink>
                    </li> <li>
                        <NavLink className={"navbar-link"} to={'/join-us'}>Join US</NavLink>
                    </li> <li>
                        <NavLink className={"navbar-link"} to={'/contact'}>Contact US</NavLink>
                    </li>
                    <li>
                        <NavLink className={"navbar-link"} to={'/blogs'}>Blogs</NavLink>
                    </li>
                </ul>
            </Box>

        </Toolbar>
        </AppBar>

    </div>
  )
}

export default Header