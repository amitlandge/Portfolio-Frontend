import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, serif",

    body1: {
      fontSize: "1rem", // Example font size for body text
      color: "white",
    },
    htmlFontSize: "62.2%",
  },
});

export default theme;
