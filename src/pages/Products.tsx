import React ,{ReactElement,FC} from "react"
import{Box,Typography} from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';




const Products:FC <any> =():ReactElement => {
    return (
<Box sx={{
              flexGrow: 1,
              backgroundColor:'#708090',
              display:'flex',
              justifyContent:'normal',
              alignItems:'center',
              gap: 2,
              flexWrap: 'wrap',
              padding: '20px'}}>
              
      <Card sx={{ maxWidth: 280 }} >
        <Box>
          <Typography>
          <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Gibson_SG.jpg" alt="" />
          </Typography>
        </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gibson 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>


      <Card sx={{ maxWidth: 330 }}>

          <Typography>
          <img width="100%" src="https://sirclocdn.com/nafiriguitar/products/_211116124721_AST%2052SH%20VWH%20-%20Copy%20-%20Copy_full.JPG" alt="" />
          </Typography>
 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Schecter
         </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 350 }}>

      <Typography>
          <img width="100%" src="https://quickbutik.imgix.net/1637U/products/5fddef9a26220.jpeg?auto=format,compress&fit=max&max-w=1600&max-h=1200&dpr=1" alt="" />
          </Typography>
 
      <CardContent>


        <Typography gutterBottom variant="h5" component="div">
            Flying V
         </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


        </Box>
    )}
export default Products;