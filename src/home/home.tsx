import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./home.css"


function Home() {
  return (
    
      <Card >
        <CardMedia className="CardMedia" sx={{height:"15rem"}} image={require("../assest/banner.jpg")}>
        <Grid sx={{height:"inherit"}} container spacing={0}>
          <Grid /* sx={{height:"inherit"}} */ xs={12} sm={6} md={6}>
                <Card sx={{height:"inherit", opacity:0.5}}> Hi there</Card>
          </Grid>
          <Grid /* sx={{height:"inherit"}} */ xs={12} sm={6} md={6}>
                <Card sx={{height:"inherit", opacity:0.5}}> Hi there</Card>
          </Grid>
          </Grid>
        </CardMedia>
        <CardContent sx={{height: "auto" }} >
          <Grid container spacing={0}>
            <Grid xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h5" align="left">
                  About me
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h5" align="left">
                  About me
                </Typography>
                <Typography variant="body2" align="left" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
 
  );
}

export default Home;
