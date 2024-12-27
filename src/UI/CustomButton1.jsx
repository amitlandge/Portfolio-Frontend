import { Button } from "@mui/material";

const CustomButton1 = (prop) => {
  return (
    <Button
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
