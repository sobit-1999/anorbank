import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image1 from "./imagesJSh/image1.png"
import NavbarJSh from '../../header/NavbarJSh';
// import NavbarJSh from '../../header/NavbarJSH';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  height: "100%",
  display: "flex",
  alignItems: "center",
  boxShadow: "none"
}));


export default function JShPage() {
  return (<Box sx={{ mx: "8%"}}>
    <NavbarJSh />
    <Grid container spacing={0}>
  <Grid item xs={12} md={6}>
    <Item>
        <Box sx={{maxWidth: 400}}>        <Typography
        component="div"
        variant="h4"
        sx={{ fontWeight: {xs: "500", md: "700"}}}
        >
            Anorbank mobil ilova
        </Typography>
        
        <Typography
        sx={{my: 3}}
        component="div"
        variant="h5"
        >Ilovaning barcha imkoniyatlari sizning smartfoningizda.

        </Typography>
        <Button 
        sx={{
            backgroundColor: "rgb(155, 19, 78)",
            color: "#fff",
            padding: "10px 20px"
        }}
        >
            Batafsil m'alumot
        </Button>
        </Box>

    </Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item>
        <img src={image1} width="100%" alt="img"/>
        </Item>
  </Grid>
</Grid>
  </Box>
  )
}
