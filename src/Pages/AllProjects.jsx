import { Box, Button, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData.js";
import { toast } from "react-toastify";
import CustomButton1 from "../UI/CustomButton1.jsx";
const AllProjects = () => {
  const { data } = useQuery({
    queryKey: [
      "projects",
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/projects.json",
    ], // Unique key for caching
    queryFn: fetchData,
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
  if (!data) {
    return (
      <Box
        sx={{
          background: "#111111",
          minHeight: "100vh",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="error" textAlign="center" mb={4}>
          Projects not found
        </Typography>
        <CustomButton1 title={"Go Back"} url={"/projects"} />
      </Box>
    );
  }
  return (
    <motion.div
      initial={{ transform: "translateX(800px)", opacity: 0 }}
      animate={{ transform: "translateX(0)", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ background: "#111111" }}>
        <Box sx={{ textAlign: "center", padding: "2rem" }}>
          <Typography
            variant="h3"
            sx={{ color: "rgb(255,2,0)", fontWeight: "bold", fontSize: "3rem" }}
          >
            Projects
          </Typography>
          <Typography variant="subtitle1" fontSize={"1.6rem"}>
            Real-world applications showcasing my development expertise.
          </Typography>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80vw",
            margin: "0 auto",
            gap: "3rem",
            flexWrap: "wrap",
            "@media (max-width:800px)": {
              flexDirection: "column", // Shrink image for small screens
            },
          }}
        >
          {data?.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  width: "40%",
                  "@media (max-width:800px)": {
                    width: "80%",
                    margin: "0% auto", // Shrink image for small screens
                  },
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
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: "700",
                    margin: "10px 0rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Link
                  to={`/projects/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ color: "red" }}>Know More ➡</Button>
                </Link>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default AllProjects;
