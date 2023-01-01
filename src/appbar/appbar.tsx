import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./appbar.css";

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | String>(null);

  const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav("hit");
  };



  return (
    <>
      <AppBar
        position="relative"
        sx={{
          background: "transparent",
          color: "secondary",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "#49515d",
                textDecoration: "none",
              }}
            >
              Etienne
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "primary",
                textDecoration: "none",
              }}
            >
              Baumgartner
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: "2rem",
              }}
            >
              {pages.map((page) => (
                <Button
                  className="AppbarButton"
                  key={page}
                  onClick={handleNavClick}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container className="Fader">{anchorElNav}</Container>
    </>
  );
}
export default ResponsiveAppBar;
