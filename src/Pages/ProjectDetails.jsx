import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomButton1 from "../UI/CustomButton1";
import { GitHub } from "@mui/icons-material";

const ProjectDetails = () => {
  const { pid } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  console.log(pid);

  const getCartData = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/projects.json"
    );
    console.log(res.data);
    const findProject = res?.data?.find((item) => item.id === pid);

    setProject(findProject);
  };
  console.log(typeof project?.frontendGithub);
  useEffect(() => {
    getCartData();
  }, []);

  if (!project) {
    return (
      <Box
        sx={{
          background: "#111111",
          minHeight: "100vh",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="error" textAlign="center">
          Project not found
        </Typography>
        <CustomButton1 title={"Go Back"} />
      </Box>
    );
  }

  return (
    <Box sx={{ background: "#111111", minHeight: "100vh", py: 4 }}>
      <Box
        sx={{
          maxWidth: "80%",
          mx: "auto",
          background: "#272424",
          padding: "2rem",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          {project?.title}
        </Typography>
        <Box>
          <img
            src={project?.thumbnail}
            alt={project?.title}
            style={{ width: "100%" }}
          />
        </Box>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {project.subheadline}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {project.description}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Key Features:</Typography>
          <List>
            {project?.keyFeatures?.map((feature, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${feature}`} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Technologies Used:</Typography>
          <Stack direction="row" flexWrap={"wrap"} gap={"1rem"} sx={{ mt: 1 }}>
            {project?.technologies?.map((tech, index) => (
              <Chip key={index} label={tech} color="error" variant="outlined" />
            ))}
          </Stack>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Stack direction="row" flexWrap={"wrap"} gap={"2rem"}>
            {project?.frontendGithub &&
              typeof project?.frontendGithub === "string" && (
                <Button
                  variant="contained"
                  color="primary"
                  href={project?.frontendGithub} // Use href for external links
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practices for external links
                  startIcon={<GitHub />}
                >
                  GitHub Frontend Repository
                </Button>
              )}
            {project?.backendGithub && (
              <Button
                variant="contained"
                color="primary"
                href={project?.backendGithub} // Use href for external links
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practices for external links
                startIcon={<GitHub />}
              >
                GitHub Backend Repository
              </Button>
            )}

            {project?.deployedLink &&
              typeof project?.deployedLink === "string" && (
                <Button
                  href={project?.deployedLink} // Use href for external links
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practices for external links
                  variant="contained"
                  color="error"
                >
                  Live Demo
                </Button>
              )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
