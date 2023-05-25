<<<<<<< HEAD
import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
=======

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./Routes/routes";
>>>>>>> c2b2efa (Actualizacion)
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";



<<<<<<< HEAD
function App() {
  // define theme
  const theme = createTheme({
    
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#A9A9A9",
        dark: "#005db0",
        contrastText: "#A9A9A9",
      },
      secondary: {
        main: "#000000",
        light: "#000000",
        dark: "#000000",
        contrastText: "#000000",
        
      },
    },
=======

function App() {
  // define tema global, al igual como en las mismas paginas
  const theme = createTheme({
    
>>>>>>> c2b2efa (Actualizacion)
  });

  return (
    <ThemeProvider  theme={theme}>
      
      <CssBaseline />
<<<<<<< HEAD
      <Box height="100vh" display="flex" flexDirection="column" sx={{background:"#708090"}}>
        <Router>
          <Navbar />
=======
      <Box sx={{  paddingBottom:'2 rem', height:"50"}}>
        <Router>
          <Navbar/>
>>>>>>> c2b2efa (Actualizacion)
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
<<<<<<< HEAD
=======
        
>>>>>>> c2b2efa (Actualizacion)
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
<<<<<<< HEAD
=======

    
>>>>>>> c2b2efa (Actualizacion)
  );
}

export default App;