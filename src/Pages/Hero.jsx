import { Box, Typography } from "@mui/material";

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
        "@media (max-width:900px)": {
          flexDirection: "column",

          alignItems: "flex-start",
        },
      }}
    >
      <Box
        sx={{
          flex: "55%",
          "@media (max-width:900px)": {
            width: "90%",
          },
          "@media (max-width:500px)": {
            width: "97%",
          },
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dow92cdi4/image/upload/v1736315580/amit12_bitbir.png"
          alt="Responsive Image"
          sx={{
            width: "55%", // Default width
            height: "auto", // Maintain aspect ratio
            "@media (max-width:800px)": {
              width: "80%", // Shrink image for small screens
            },
            "@media (max-width:500px)": {
              width: "100%", // Shrink image for small screens
            },
          }}
        />
      </Box>
      <Box
        sx={{
          flex: "35%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
          padding: "1rem",
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
            fontSize: "3.5rem",
          }}
        >
          Full Stack
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            fontSize: "3.5rem",
            // alignSelf: "center",
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
          Transforming Ideas into Dynamic and Responsive Web Applications with
          Cutting-Edge Technologies
        </Typography>
        <CustomButton1 title={"About Me"} url={"/about"} />
      </Box>
    </Box>
  );
};

export default Hero;
