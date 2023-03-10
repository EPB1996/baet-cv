import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "../home/home";
import { CssBaseline } from "@mui/material";
import "./appbar.css";
import CV from "../cv/cv";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "CV"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [content, setContent] = React.useState("Home");

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    setContent(text);
  };

  const handleDrawerToggle = (e: any) => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => handleClick(e, item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="App">
      <CssBaseline />
      <AppBar className="AppNav">
        <Box className="MarginHandler">
          <Toolbar sx={{ left: 0, maxWidth: "1032px", margin: "0 auto" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{ paddingRight: "3px", display: { xs: "none", sm: "block" } }}
            >
              Etienne
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "#2196f3",
              }}
            >
              Baumgartner
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  className="AppbarButton"
                  onClick={(e) => handleClick(e, item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ padding: "16px", maxWidth: "1032px", margin: "0 auto" }}
      >
        {content === "Home" ? <Home></Home> : null}
        {content === "CV" ? <CV></CV> : null}
      </Box>
    </Box>
  );
}
