import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "./timelineItem";
import { TimelineProjectProps } from "./timelineInteraces";

function TimelineProject(props: TimelineProjectProps) {
  const t = props.skills;
  return (
    <Card className="TimelineItem" variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Box sx={{ display: "flex", color: "#9e9e9e", fontSize: "14px" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "inherit",
            }}
          >
            {props.subtitle}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", color: "#9e9e9e", fontSize: "12px" }}>
          <Typography
            sx={{ color: "#2196f3", fontSize: "inherit" }}
            variant="body2"
          >
            {props.periode}
          </Typography>
        </Box>
        <Grid container sx={{justifyContent:"space-between"}} gap={1}>
          <Grid xs={11} sm={11} md={8} sx={{ margin: "0"}}>
            <Typography style={{whiteSpace: 'pre-line'}} sx={{paddingTop:"2px"}} variant="body2">{props.description}</Typography>
            <Typography variant="body2" sx={{fontWeight:"bold"}}>Responsabilities:</Typography>
            <ul>
            {props.responsabilities.map((responsability) =>{
              return (<li>  <Typography variant="body2">{responsability}</Typography></li>)
            })}
            </ul>
            <Typography variant="body2" sx={{fontWeight:"bold"}}>Skills Learned:</Typography>
            <ul>
            {props.learned.map((skill) =>{
              return (<li>  <Typography variant="body2">{skill}</Typography></li>)
            })}
            </ul>
          </Grid>
          <Grid
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={1}
            container
            xs={12}
            sm={12}
            md={3}
            sx={{height:"fit-content"}}
          >
            {t.map((item) => {
              return (
                <Button variant="outlined" className="skill" disabled>
                  {item}
                </Button>
              );
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TimelineProject;
