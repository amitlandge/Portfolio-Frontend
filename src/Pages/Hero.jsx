import { Box, Typography } from "@mui/material";
import userImage from "../assets/User.png";
import CustomButton1 from "../UI/CustomButton1";
const Hero = () => {
  return (
    <Box
      sx={{
        background: "rgb(17,17,17)",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: "60%",
        }}
      >
        <img src={userImage} alt="avatar" width={"80%"} />
      </Box>
      <Box
        sx={{
          flex: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "800",
            fontSize: "1.6rem",
            color: "rgb(255,2,0)",
          }}
        >
          Hello I'm Amit
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            fontSize: "4.2rem",
          }}
        >
          Full Stack
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "600",
            fontSize: "1.2rem",
            alignSelf: "center",
          }}
        >
          Web Developer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "80%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cum
          enim soluta eius fugiat harum veritatis. Sit doloribus molestias
          voluptates.
        </Typography>
        <CustomButton1 title={"About Me"} />
      </Box>
    </Box>
  );
};

export default Hero;
