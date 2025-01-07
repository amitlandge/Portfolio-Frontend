import { Box, Grid, Typography, Paper } from "@mui/material";
import CustomButton1 from "../UI/CustomButton1";
import userImage from "../assets/amit.JPG";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(800px)", opacity: 0 }}
      animate={{ transform: "translateX(0)", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#121212",
          color: "#ffffff",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography
            variant="h2"
            sx={{ color: "rgb(255,2,0)", fontWeight: "bold", fontSize: "3rem" }}
          >
            About Me
          </Typography>
          <Typography variant="subtitle1" fontSize={"1.6rem"}>
            Get to know more about who I am and what I do!
          </Typography>
        </Box>

        {/* About Section */}
        <Grid container spacing={4}>
          {/* Intro Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: "2rem",
                backgroundColor: "#1e1e1e",
                borderRadius: "0px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box
                    component="img"
                    src={userImage}
                    alt="Your Photo"
                    sx={{
                      width: "100%",
                      borderRadius: "0px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Hello! I'm Amit
                  </Typography>
                  <Typography variant="body1" sx={{ margin: "1rem 0rem" }}>
                    I'm a passionate Full Stack Web Developer specializing in
                    the MERN stack. I love building responsive and user-focused
                    web applications. Let's collaborate to create amazing
                    projects!
                  </Typography>
                  <CustomButton1 title={"Contact Me"} url={"/contact"} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: "2rem",
                backgroundColor: "#1e1e1e",
                borderRadius: "0px",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Skills & Expertise
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                - Proficient in JavaScript, React, Node.js, Express, and MongoDB
                <br />
                - Experienced with responsive design using CSS, Bootstrap, and
                Material UI
                <br />
                - Skilled in RESTful APIs and state management (Redux, Context
                API)
                <br />- Passionate about solving complex problems and optimizing
                user experiences
              </Typography>
            </Paper>
          </Grid>

          {/* Fun Facts Section */}
          <Grid item xs={12} md={12}>
            <Paper
              elevation={3}
              sx={{
                padding: "2rem",
                backgroundColor: "#1e1e1e",
                borderRadius: "0px",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Fun Facts
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                - I love to sing and explore music in my free time <br />
                - A strong believer in lifelong learning and personal growth
                <br />- I enjoy experimenting with new technologies and building
                exciting side projects
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;
