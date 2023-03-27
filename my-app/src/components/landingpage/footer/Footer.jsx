import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../../images/logo-the-shubham.png";
import { NavLink } from "react-router-dom";
import LoginDialog from "../LoginDialog/LoginDialog";

const FooterShadow = styled(Box)`
  box-shadow: 7px 2px 7px 2px black, 3px 4px 8px #ccc;
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;

const FooterWrapper = styled(Box)`
  width: 100%;
  background: #ccc;
  margin-bottom: 2rem;

  );

  // border: 2px solid black;
  padding: 2rem;
`;

const Pages = styled(Box)`
  & li {
    text-decoration: none;
    list-style: none;
  }
`;

const FooterContact = styled(Box)`
  padding: 1rem 0;

  & p {
    padding-left: 1rem;
  }

  & a {
    text-decoration: none;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`;

const Calling = styled(Box)`
  display: flex;
  margin: 1rem 0;

  & a {
    text-decoration: none;
    color: green;
  }
`;

const CopyRightsWrapper = styled(Box)`
  box-shadow: 5px 5px 7px black;
  height: 6vh;
  background: rgb(150, 60, 60);
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #ccc;
  }
`;

const InstagramWrapper = styled(Box)`

  & a{
    color: red;
  }
`;

function Footer() {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <FooterShadow>
      <FooterWrapper>
        <Grid item container spacing={6}>
          <Grid item xs={12} md={6} lg={3}>
            <Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <img style={{ width: 70 }} src={Logo} alt="footer logo" />
                <Typography variant="h5">
                  The Shubam Group of Company
                </Typography>
              </Box>

              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                nesciunt doloremque maxime, autem harum blanditiis laudantium
                nam saepe quod ex impedit cum iusto voluptatem necessitatibus
                quos accusantium illo minus deleniti voluptates delectus nihil.
                Placeat dolore corrupti nulla explicabo consequuntur, laudantium
                molestias ea pariatur aspernatur architecto reiciendis itaque
                ad. Tempore, cumque?
              </Typography>
            </Box>
          </Grid>

          {/* <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}></Grid> */}

          <Grid item xs={12} md={6} lg={3}>
            <FooterContact>
              <Typography variant="h5">Contact</Typography>
              <Box>
                <Box sx={{ display: "flex", margin: "1rem 0" }}>
                  <HomeIcon />
                  <Typography>Okhala, New Delhi 110020</Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <EmailIcon />
                  <Typography>Info@tsgcdelhi.com</Typography>
                </Box>

                <Calling>
                  <PhoneIcon />
                  <a href="tel:+91 8510850101">call</a>
                </Calling>

                <Box>
                  <a
                    href="https://www.instagram.com/theshubhamgroup/"
                    target={"_blank"}
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/shubhamgroup7/"
                    target={"_blank"}
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    href="https://www.facebook.com/theshubhamGroup/"
                    target={"_blank"}
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="https://twitter.com/theshubhamgroup"
                    target={"_blank"}
                  >
                    <TwitterIcon />
                  </a>
                </Box>
              </Box>
            </FooterContact>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <FooterContact>
              <Typography variant="h5">Contact</Typography>
              <Box>
                <Box sx={{ display: "flex", margin: "1rem 0" }}>
                  <HomeIcon />
                  <Typography>Okhala, New Delhi 110020</Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <EmailIcon />
                  <Typography>Info@tsgcdelhi.com</Typography>
                </Box>

                <Calling>
                  <PhoneIcon />
                  <a href="tel:+91 8510850101">call</a>
                </Calling>

                <Box>
                  <InstagramWrapper>
                    <a
                      href="https://www.instagram.com/theshubhamgroup/"
                      target={"_blank"}
                    >
                      <InstagramIcon />
                    </a>
                  </InstagramWrapper>

                  <a
                    href="https://www.linkedin.com/company/shubhamgroup7/"
                    target={"_blank"}
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    href="https://www.facebook.com/theshubhamGroup/"
                    target={"_blank"}
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="https://twitter.com/theshubhamgroup"
                    target={"_blank"}
                  >
                    <TwitterIcon />
                  </a>
                </Box>
              </Box>
            </FooterContact>
          </Grid>

          <Grid item xs={12} md={2} lg={3}>
            <Pages>
              <Typography variant="h5">Links</Typography>
              <ul>
                <li>
                  <NavLink className={"navbar-link"} to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"navbar-link"} to={"/about"}>
                    About
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink className={"navbar-link"} to={"/team"}>
                    Team
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink className={"navbar-link"} to={"/masterpiece"}>
                    Our Masterpiece
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink className={"navbar-link"} to={"/join-us"}>
                    Join US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{
                      border: "none",
                      textDecoration: "none",
                      color: "rgb(150, 60, 60)",
                    }}
                    onClick={() => openDialog()}
                  >
                    Contact US
                  </NavLink>
                </li>
                {/* <li>

                    <ContactButtonWrapper>        
                    <Button onClick={()=> openDialog()} >Contact</Button>
                    </ContactButtonWrapper>
                    </li> */}
                <li>
                  <NavLink className={"navbar-link"} to={"/blogs"}>
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </Pages>

            <LoginDialog open={open} setOpen={setOpen} />
          </Grid>

          <Grid item xs={12} md={12}>
            <CopyRightsWrapper>
              <Typography>All rights are reserved &copy; &reg;</Typography>
            </CopyRightsWrapper>
          </Grid>
        </Grid>
      </FooterWrapper>
    </FooterShadow>
  );
}

export default Footer;
