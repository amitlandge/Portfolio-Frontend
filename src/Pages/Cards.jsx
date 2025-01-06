import { Box, Button, Stack, Typography } from "@mui/material";
import { cartData } from "../Data/CartData.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Cards = () => {
  const [data, setData] = useState([]);
  const getCartData = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/cards.json"
    );
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <Box
      sx={{
        background: "#1e1d1d",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch !important",
        padding: "3rem",
        gap: "3rem",
      }}
    >
      {data.map((item, index) => {
        return (
          <Stack
            key={index}
            sx={{
              flex: 0.8,
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              background: "#272424",
              padding: "2.5rem",
            }}
          >
            <Box
              className="material-icons"
              sx={{
                fontSize: "4rem",
                color: "rgb(255,2,0)",
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                color: "white",
                fontSize: "1.8rem",
                textAlign: "center",
              }}
            >
              {item?.title}
            </Typography>
            <Typography
              variant="body1"
              textAlign={"center"}
              fontSize={"0.9rem"}
            >
              {item?.briefDescription}
            </Typography>
            <Button
              sx={{ color: "red" }}
              component={Link}
              to={`/card/${item.id}`}
            >
              Know More ➡{" "}
            </Button>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Cards;
