import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  MenuList,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { fontWeight } from "../Style/fontWeight";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Toggle the drawer open/close
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Inline styling for components
  const appBarStyle = {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    color: "red !important",
    width: "4rem",
    fontSize: "3rem",
  };

  const drawerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
  };

  const closeIconStyle = {
    position: "absolute",
    top: 20,
    right: 20,
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div>
      {/* AppBar with Hamburger Icon */}
      <AppBar position="fixed" style={appBarStyle}>
        <Toolbar>
          <IconButton edge="start" color="red" onClick={toggleDrawer}>
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Full-Height Vertical Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{ sx: { ...drawerStyle } }}
      >
        {/* Close Button */}
        <IconButton style={closeIconStyle} onClick={toggleDrawer}>
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </IconButton>

        {/* Navigation List */}
        <Box>
          <MenuList
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuItem sx={{ ...fontWeight }} onClick={toggleDrawer}>
              <Link to={"/"}>Home</Link>
            </MenuItem>
            <MenuItem sx={{ ...fontWeight }} onClick={toggleDrawer}>
              <Link to={"projects"}>Projects</Link>
            </MenuItem>
            <MenuItem sx={{ ...fontWeight }} onClick={toggleDrawer}>
              <Link to={"about"}>About Us</Link>
            </MenuItem>
            <MenuItem sx={{ ...fontWeight }} onClick={toggleDrawer}>
              <Link to={"contact"}>Contact Us</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
