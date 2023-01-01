import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";


function Home() {
  return (
    <Container>
      <Card variant="outlined">
        <CardMedia sx={{ height: "15rem" }} image={require("./banner.jpg")}>
        <Grid container spacing={0}>
          <Grid xs={12} sm={12} md={6}>
                <Card> Hi there</Card>
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
    </Container>
  );
}

export default Home;
