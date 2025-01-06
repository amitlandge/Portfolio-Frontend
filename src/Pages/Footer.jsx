import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, MenuItem, MenuList, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      sx={{
        background: "#272424",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "1rem",
        alignItems: "center",
        color: "white",
      }}
    >
      <Stack>
        <MenuList
          sx={{
            display: "flex",
            fontWeight: "600",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <MenuItem>
            <Link to={"/"}>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/projects"}>Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/about"}>About Us</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/contact"}>Contact Us</Link>
          </MenuItem>
        </MenuList>
      </Stack>
      <Box
        sx={{
          color: "white",
          display: "flex",
          gap: "2rem",
          fontSize: "1.6rem",
        }}
      >
        <Link to={"https://www.instagram.com/_amit333_/"} target="_blank">
          <Instagram />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/amit-landge-a28159249/"}
          target="_blank"
        >
          <LinkedIn />
        </Link>
        <Link to={"https://github.com/amitlandge"} target="_blank">
          <GitHub />
        </Link>
      </Box>
    </Stack>
  );
};

export default Footer;
