import { Box, Card, CardContent, Typography } from "@mui/material";
import "./timelineItem.css";
import { TimelineItemProps } from "./timelineInteraces";



function TimelineItem(data: TimelineItemProps) {
  return (
    <Card className="TimelineItem" variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", color: "#9e9e9e", fontSize: "12px" }}>
          <Typography
            sx={{ color: "#2196f3", fontSize: "inherit" }}
            variant="body2"
          >
            {data.periode}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginLeft: "5px",
              marginBottom: "8px",
              paddingLeft: "8px",
              borderLeft: "1px solid #e0e0e0",
              fontSize: "inherit",
            }}
          >
            {data.institution}
          </Typography>
        </Box>
        <img className="logo" src={data.logo} alt="logo"></img>

        <Typography variant="body2">{data.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default TimelineItem;
