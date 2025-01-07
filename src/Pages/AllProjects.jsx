import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const AllProjects = () => {
  const [data, setData] = useState([]);
  const getCartData = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/projects.json"
    );

    setData(res.data);
  };
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <motion.div
      initial={{ transform: "translateX(800px)", opacity: 0 }}
      animate={{ transform: "translateX(0)", opacity: 1 }}
      transition={{ duration: 1 }}
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
          {data.map((item) => {
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
