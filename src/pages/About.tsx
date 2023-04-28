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