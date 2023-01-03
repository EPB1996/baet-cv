import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import {
  TimelineItemProps,
  TimelineProjectProps,
} from "../timeline/timelineInteraces";
import TimelineItem from "../timeline/timelineItem";
import TimelineProject from "../timeline/timelineProject";
import "./cv.css";

function CV() {
  const itemTemplate: TimelineItemProps = {
    title: "JobTitle",
    description: "JobDescription",
    institution: "Institution",
    logo: require("../assest/ost_logo.png"),
    periode: "2000-Now",
  };

  const projectTemplate: TimelineProjectProps = {
    title: "JobTitle",
    description: "JobDescription",
    periode: "2000-Now",
    skills: ["Skill", "SkillSkill", "SkillSkillSkillSkill", "Skill", "Skill"],
  };

  return (
    <Card className="CVCard">
      <CardMedia
        className="CardMedia"
        sx={{ height: "5rem" }}
        image={require("../assest/banner.jpg")}
      ></CardMedia>
      <CardContent sx={{ height: "auto" }}>
        <Grid container>
          <Grid className="TimelineGridItem" xs={12} sm={12} md={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5" align="left">
              Exerience
            </Typography>
            <Box className="TimelineContainer">
              <TimelineItem {...itemTemplate}></TimelineItem>
            </Box>
          </Grid>
          <Grid className="TimelineGridItem" xs={12} sm={12} md={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5" align="left">
              Education
            </Typography>
            <Box className="TimelineContainer">
              <TimelineItem {...itemTemplate}></TimelineItem>
            </Box>
          </Grid>

          <Grid className="TimelineGridItem" xs={12} sm={12} md={12}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5" align="left">
              Projects
            </Typography>
            <Box className="TimelineContainer">
              <TimelineProject {...projectTemplate}></TimelineProject>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CV;
