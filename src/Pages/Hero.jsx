import { Box, Button, Typography } from "@mui/material";
import userImage from "../assets/User.png";
const Hero = () => {
  return (
    <Box
      sx={{
        background: "rgb(17,17,17)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={userImage} alt="avatar" />
      </Box>
      <Box>
        <Typography variant="h3">Hello I'm Amit</Typography>
        <Typography variant="h1">Full Stack Web Developer</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cum
          enim soluta eius fugiat harum veritatis. Sit doloribus molestias
          voluptates.
        </Typography>
        <Button>About Me</Button>
      </Box>
    </Box>
  );
};

export default Hero;
