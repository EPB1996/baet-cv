import { Box, Card, CardContent, Typography } from "@mui/material";
import "./timeline.css";
import { TimelineProjectProps } from "./timelineInteraces";

function TimelineProject(props: TimelineProjectProps) {
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

        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default TimelineProject;
