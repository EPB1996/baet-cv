import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Timeline from "../timeline/timeline";
import "./cv.css";

function CV() {
  return (

      <Card >
        <CardMedia
          className="CardMedia"
          sx={{ height: "5rem" }}
          image={require("../assest/banner.jpg")}
        ></CardMedia>
        <CardContent sx={{ height: "auto" }}>
          <Grid container >
            <Grid  className="TimelineGridItem" xs={12} sm={12} md={6}>
              <Typography variant="h5" align="left"> 
                Exerience
              </Typography>
              <Box className="TimelineContainer">
              <Timeline></Timeline>
              <Timeline></Timeline>
              </Box>

              
            </Grid>
            <Grid className="TimelineGridItem" xs={12} sm={12} md={6}>
            <Typography variant="h5" align="left">
                Education
              </Typography>
              <Box className="TimelineContainer">
              <Timeline></Timeline>
              <Timeline></Timeline>
              <Timeline></Timeline>
              <Timeline></Timeline>
              <Timeline></Timeline>
              <Timeline></Timeline>
              <Timeline></Timeline>
              <Timeline></Timeline>
              </Box>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    
  );
}

export default CV;
