import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, serif",
    backgroundColor: "#111111",
    h1: {
      fontSize: "3rem", // Default for large screens
      "@media (max-width:1200px)": {
        fontSize: "2.5rem", // Medium screens
      },
      "@media (max-width:800px)": {
        fontSize: "2rem", // Small screens
      },
    },
    h2: {
      fontSize: "2.5rem",
      "@media (max-width:1200px)": {
        fontSize: "2rem",
      },
      "@media (max-width:800px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontSize: "2rem",
      "@media (max-width:1200px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width:800px)": {
        fontSize: "1.3rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:1200px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:800px)": {
        fontSize: "0.7rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (max-width:1200px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:800px)": {
        fontSize: "0.75rem",
      },
    },
    subtitle1: {
      fontSize: "1.6rem",
      "@media (max-width:1200px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:800px)": {
        fontSize: "1rem",
      },
    },
    caption: {
      fontSize: "0.75rem",
      "@media (max-width:1200px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:800px)": {
        fontSize: "0.65rem",
      },
    },
    button: {
      fontSize: "0.875rem",
      "@media (max-width:1200px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:800px)": {
        fontSize: "0.75rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%", // Default font size (10px = 1rem)
          "@media (max-width:800px)": {
            fontSize: "50%", // Smaller screens
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
