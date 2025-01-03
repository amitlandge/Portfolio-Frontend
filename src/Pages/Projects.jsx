import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import CustomButton1 from "../UI/CustomButton1";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  const getCartData = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/projects.json"
    );
    console.log(res.data);
    const slicedData = res.data.slice(0, 4);
    setData(slicedData);
  };
  useEffect(() => {
    getCartData();
  }, []);
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
          width: "80vw",
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
          // justifyContent: "space-around",
          width: "80vw",
          margin: "2rem auto",
          gap: "3rem",
          flexWrap: "wrap !important",
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
                flex: "40%",
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
              <Button sx={{ color: "red" }}>Know More ➡ </Button>
            </Box>
          );
        })}
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "80%",
          margin: "0% auto",
          padding: "2rem",
          background: "#272424",
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
              fontWeight: "700",
              color: "white",
            }}
          >
            Let's work together on your next project
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "0.8rem", width: "70%" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            eligendi itaque tempora totam dolores minima?
          </Typography>
        </Box>
        <CustomButton1 title={"Contact"} />
      </Stack>

      <Stack
        sx={{
          width: "80%",
          margin: "0% auto",
        }}
      >
        <MenuList
          sx={{
            display: "flex",
            fontWeight: "600",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <MenuItem>
            <Link>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link>Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link>About Us</Link>
          </MenuItem>
          <MenuItem>
            <Link>Contact Us</Link>
          </MenuItem>
        </MenuList>
      </Stack>
    </Box>
  );
};

export default Projects;
