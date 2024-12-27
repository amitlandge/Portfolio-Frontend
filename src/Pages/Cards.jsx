import { Box, Button, Stack, Typography } from "@mui/material";
import { cartData } from "../Data/CartData.js";
const Cards = () => {
  return (
    <Box
      sx={{
        background: "#1e1d1d",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "stretch !important",
        padding: "3rem",
        gap: "3rem",
      }}
    >
      {cartData.map((item, index) => {
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
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              textAlign={"center"}
              fontSize={"0.9rem"}
            >
              {item.description}
            </Typography>
            <Button sx={{ color: "red" }}>Know More ➡ </Button>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Cards;
