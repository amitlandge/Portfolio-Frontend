import { Box, MenuItem, MenuList, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { fontWeight } from "../Style/fontWeight.js";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "black ",
        color: "white",
      }}
    >
      <Box>
        <Typography variant="h2">Logo</Typography>
      </Box>
      <MenuList
        sx={{
          display: "flex",
          fontWeight: "600",
        }}
      >
        <MenuItem>
          <Link style={{ ...fontWeight }}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ ...fontWeight }}>Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ ...fontWeight }}>About Us</Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ ...fontWeight }}>Contact Us</Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Navbar;
