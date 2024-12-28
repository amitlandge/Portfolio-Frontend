import { Box, Button, Stack, Typography } from "@mui/material";
import CustomButton1 from "../UI/CustomButton1";
import { projectData } from "../Data/ProjectData";

const Projects = () => {
  return (
    <Box
      sx={{
        background: "#111111",
      }}
    >
      <Stack
        flexDirection={"row"}
        sx={{
          flexWrap: "wrap",
          padding: "2rem",
          width: "80%",
          margin: "0% auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: "1rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "white",
            }}
          >
            Featured Projects
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </Typography>
        </Box>
        <CustomButton1 title={"View All"} />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80vw",
          margin: "0% auto",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {projectData.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                width: "40%",
              }}
            >
              <Box
                sx={{
                  background: "#272424",
                  padding: "2rem",
                }}
              >
                <img
                  alt={item.title}
                  src={item.thumbnail}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "700",
                  margin: "10px 0rem",
                }}
              >
                {item.title}
              </Typography>
              <Button sx={{ color: "red" }}>Know More ➡ </Button>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
