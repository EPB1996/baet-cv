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
import "./cv.css";

function CV() {
  return (
    <Container>
      <Card /* variant="outlined" */>
        <CardMedia
          className="CardMedia"
          sx={{ height: "5rem" }}
          image={require("../assest/banner.jpg")}
        ></CardMedia>
        <CardContent sx={{ height: "auto" }}>
          <Grid container spacing={0}>
            <Grid xs={12} sm={12} md={6}>
              <Typography variant="h5" align="left">
                Exerience
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
            <Typography variant="h5" align="left">
                Education
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CV;
