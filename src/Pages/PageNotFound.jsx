import { Box, Typography } from "@mui/material";
import CustomButton1 from "../UI/CustomButton1";

const PageNotFound = () => {
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
        Page Not Found
      </Typography>
      <CustomButton1 title={"Go Back"} url={"/home"} />
    </Box>
  );
};

export default PageNotFound;
