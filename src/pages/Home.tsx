import React ,{ReactElement,FC}from "react"
import{Box,Typography}from "@mui/material"
const Home:FC <any> =():ReactElement => {
    return(
        
        <Box sx={{
            alignItems:'center',
            flexGrow: 1,
            backgroundColor:'#708090',
            display:'flex',
            justifyContent:'normal',           
            gap: 2,
            flexWrap: 'wrap',
            padding: '20px',
           
             
        }}>
         <Typography padding="10px" >
          <img  width="100%"  src="https://www.latercera.com/resizer/i5zosp9QI7w_zkky7cy-IOAMmTo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/5IGMU2GY25HPRA4PVNJV7PY3VI.jpg" alt="" />
        </Typography>

          <Typography
          sx={{
            fontFamily: "roboto",
            fontSize: "25px",
            padding:"20px",
            width: "40%",
            color:"white",
            borderRadius:"20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "right",
            marginLeft: "6rem",
            backgroundColor: "#34495E",
          }}>
            <p>Si eres un amante de la música y en particular de la guitarra, entonces estás en el lugar indicado. Esta página web es tu nuevo hogar, el lugar donde encontrarás todo lo relacionado con este instrumento tan emblemático y versátil. Desde las guitarras más clásicas y tradicionales hasta las más modernas y vanguardistas, aquí podrás encontrar una amplia variedad de modelos y marcas para que puedas escoger la que mejor se adapte a tus necesidades y estilo musical.
                <br/> Además, también podrás encontrar todo tipo de accesorios para complementar tu experiencia musical, desde amplificadores y pedales de efectos hasta cuerdas y afinadores. Y si eres principiante, no te preocupes, aquí también encontrarás recursos y guías para ayudarte en tus primeros pasos con la guitarra. Así que no lo dudes más y entra a nuestra página para sumergirte en el maravilloso mundo de la guitarra.
             
            </p>
          </Typography>
            
           
        
        </Box>
    )
} 
export default Home;

