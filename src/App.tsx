import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";



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
  });

  return (
    <ThemeProvider  theme={theme}>
      
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column" sx={{background:"#708090"}}>
        <Router>
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;