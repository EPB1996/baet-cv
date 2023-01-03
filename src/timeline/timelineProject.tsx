import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "./timeline.css";
import { TimelineProjectProps } from "./timelineInteraces";

function TimelineProject(props: TimelineProjectProps) {
  const t = props.skills;
  return (
    <Card className="TimelineItem" variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Box sx={{ display: "flex", color: "#9e9e9e", fontSize: "12px" }}>
          <Typography
            sx={{ color: "#2196f3", fontSize: "inherit" }}
            variant="body2"
          >
            {props.periode}
          </Typography>
        </Box>
        <Grid container gap={1}>
          <Grid className="TimelineGridItem" xs={11} sm={11} md={8}>
            <Typography variant="body2">{props.description}</Typography>
          </Grid>
          <Grid
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={1}
            container
            className="TimelineGridItem"
            xs={12}
            sm={12}
            md={3}
          >
            {t.map((item) => {
              return (
                <Button variant="outlined" className="skill" disabled >
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
