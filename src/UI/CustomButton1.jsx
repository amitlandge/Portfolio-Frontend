import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton1 = (prop) => {
  const url = prop.url;
  return (
    <Button
      component={Link}
      to={url}
      sx={{
        background: "rgb(255,2,0)",
        color: "white",
        borderRadius: "0",
        padding: "0.5rem",
      }}
    >
      {prop.title}
    </Button>
  );
};

export default CustomButton1;
