<<<<<<< HEAD
import React ,{ReactElement,FC} from "react"
import{Box,Typography} from "@mui/material"
const About:FC <any> =():ReactElement => {
    return (

<Box>
        <Typography padding="20px" textAlign="center">
          <img  width="50%"  src="https://i.ytimg.com/vi/hEOuGs7m8bw/maxresdefault.jpg" alt="" />
          </Typography>


        <Box sx={{
            flexGrow: 1,
            backgroundColor:'whitesmoke',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            
            
            <Typography variant="h5">About<br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis impedit molestiae inventore repudiandae sequi. Perferendis, voluptates quam quae odit porro repellendus eum suscipit doloremque reiciendis dolores earum. Dolore, dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis nemo modi quidem molestiae cum quaerat aspernatur, quasi excepturi, architecto ullam quia, eius dolorem natus facere iusto accusamus animi dignissimos?
        </Typography>
        </Box>

        </Box>
    )
}
export default About;
=======

import { useState } from 'react';
import{Box} from "@mui/material"
import { Alert, AlertTitle, Typography } from "@mui/material";
import { Collapse } from "reactstrap";



function About() {
    
    const [open, setOpen] = useState(true)
    return (
      



        
  <Box
 
>

    <Typography variant="h1" color="initial">
    <img width="100%" src="https://media.istockphoto.com/id/1293901441/es/foto/reproducci%C3%B3n-de-fondo-de-pantalla-de-guitarra.jpg?s=612x612&w=0&k=20&c=kiNlGYhmZc5FJIeiUwTwSjaoPZ1IHvKybs37s1TXDMw=" alt="" />
    </Typography>
  
    <Collapse in={open}>
    <Alert 
    severity="error"
    onClose={() => {setOpen(false)}} >
  
  
  
    Aun no estas conectado a la base de datos!!!
   
    </Alert>
    </Collapse>
    </Box>
      
  
     
  
        )
        
      
    
    }
export default About  
>>>>>>> c2b2efa (Actualizacion)
