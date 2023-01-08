import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import EducationDTO from "../data/education";
import JobsDTO from "../data/jobExperience";
import ProjectDTO from "../data/projects";
import {
  TimelineItemProps,
  TimelineProjectProps,
} from "../timeline/timelineInteraces";
import TimelineItem from "../timeline/timelineItem";
import TimelineProject from "../timeline/timelineProject";
import "./cv.css";

function CV() {

  return (
    <Card className="CVCard">
      <CardMedia
        className="CardMedia"
        sx={{ height: "5rem" }}
        image={require("../assest/banner.jpg")}
      ></CardMedia>
      <CardContent sx={{ height: "auto" }}>
        <Grid container >
          <Grid className="TimelineGridItem" xs={12} sm={12} md={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5" align="left">
              Exerience
            </Typography>
            <Box className="TimelineContainer">
              {JobsDTO.map((job) => {
                return <TimelineItem {...job}></TimelineItem>;
              })}
            </Box>
          </Grid>
          <Grid className="TimelineGridItem" xs={12} sm={12} md={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5" align="left">
              Education
            </Typography>
            <Box className="TimelineContainer">
              {EducationDTO.map((education) => {
                return <TimelineItem {...education}></TimelineItem>;
              })}
            </Box>
          </Grid>

          <Grid className="TimelineGridItem" xs={12} sm={12} md={12}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5" align="left">
              Projects
            </Typography>
            <Box className="TimelineContainer">

            {ProjectDTO.map((project) => {
                return <TimelineProject {...project}></TimelineProject>
              })}
              
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CV;
