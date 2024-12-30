import { Box, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import { fontWeight } from "../Style/fontWeight.js";
import logo from "../assets/logo.png";
import { Article, ContactPage, Home, Info } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "rgb(17,17,17) ",
        color: "white",
      }}
    >
      <Box>
        <img alt="logo" src={logo} width={"80rem"} />
      </Box>
      <MenuList
        sx={{
          display: "flex",
          fontWeight: "600",
        }}
      >
        <MenuItem>
          <Home />
          <Link style={{ ...fontWeight }} to={"/"}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Article />
          <Link style={{ ...fontWeight }} to={"/projects"}>
            Projects
          </Link>
        </MenuItem>
        <MenuItem>
          <Info />
          <Link style={{ ...fontWeight }} to={"/about"}>
            About Us
          </Link>
        </MenuItem>
        <MenuItem>
          <ContactPage />
          <Link style={{ ...fontWeight }} to={"/contact"}>
            Contact Us
          </Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Navbar;
