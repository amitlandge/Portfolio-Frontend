import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        background: "#272424",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1rem",
        color: "white",
      }}
    >
      <Typography variant="h4">Logo</Typography>
      <Box
        sx={{
          color: "white",
          display: "flex",
          gap: "2rem",
          fontSize: "1.6rem",
        }}
      >
        <Instagram />
        <Facebook />
        <Twitter />
      </Box>
    </Stack>
  );
};

export default Footer;
