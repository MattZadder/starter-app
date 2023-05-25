import React, { FC, ReactElement } from "react";
import {Box, Link, Container, IconButton, Menu, MenuItem, Toolbar, Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
<<<<<<< HEAD
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

=======
import { routes } from "../Routes/routes";
import { NavLink } from "react-router-dom";


const gradientStyle = {
  backgroundImage: "linear-gradient(to bottom, #ffffff, #000000)",
};

>>>>>>> c2b2efa (Actualizacion)
const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
<<<<<<< HEAD
    <Box
    
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#A9A9A9",
        padding: "5px"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src="https://logos-download.com/wp-content/uploads/2016/12/Guitar_Center_logo_logotipo.png" width="200"/>
 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
=======
    

    <Box  className="NavBar"  
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#3A4248",
        padding: "3px",
        marginTop: "50px",
        borderRadius:"2px",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#9FA0A0",   

        
         
      }}
    >
      
      <Container  maxWidth="xl">

        <Toolbar disableGutters>
          <Typography  sx={{ gradientStyle, mr: 2, display: { xs: "none", md: "flex" },}}>
            <img src="https://logos-download.com/wp-content/uploads/2016/12/Guitar_Center_logo_logotipo.png" width="200"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
>>>>>>> c2b2efa (Actualizacion)
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
<<<<<<< HEAD
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
=======
              color="info"
            >
              <MenuIcon />  
            </IconButton>

>>>>>>> c2b2efa (Actualizacion)
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
<<<<<<< HEAD
                  color="black"
=======
                  color="#9FA0A0"
>>>>>>> c2b2efa (Actualizacion)
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
<<<<<<< HEAD
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Guitar Center 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "28%",
                borderRadius:"20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "5rem",
                
                backgroundColor: "#34495E",
=======

          
     
          <Box      
            sx={{
            
              justifyContent:"center",
              marginRight:"150px",                                           
              fontSize: "50px",
              fontFamily: "roboto",
              component:"div",
              position:"center",
              flexDirection: "row",
              alignItems: "center",
              marginLeft:"50px",
              color:"#9FA0A0",
              

                    
             flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            
            Guitar Center 
            
          </Box>


          <Box className="Fuente" 
          
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "70%",
                height:"90%",
                position:"center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",              
                marginLeft:"50px",
                borderRadius: "2%",
                boxShadow:"16px 14px 20px ",                       
                borderColor: "darkred",              
                backgroundColor: "#3A4248",
>>>>>>> c2b2efa (Actualizacion)
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
<<<<<<< HEAD
                  color="white"
=======
                  color="#9FA0A0"
>>>>>>> c2b2efa (Actualizacion)
                  underline="none"
                  variant="button"
                  sx={{ fontFamily: "chiller",fontSize: "30px", marginLeft: "2rem" }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;