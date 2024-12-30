import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import CustomButton1 from "../UI/CustomButton1";

const Contact = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography
          variant="h3"
          sx={{ color: "rgb(255,2,0)", fontWeight: "bold", fontSize: "3rem" }}
        >
          Contact Us
        </Typography>
        <Typography variant="subtitle1" fontSize={"1.6rem"}>
          Feel free to get in touch with me!
        </Typography>
      </Box>

      {/* Grid Section */}
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              backgroundColor: "#1e1e1e",
              borderRadius: "0px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: "1rem", color: "white" }}
            >
              Send a Message
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                sx={{
                  marginBottom: "1rem",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#2c2c2c",
                    color: "#ffffff",
                  },
                  "& .MuiInputLabel-root": { color: "#b3b3b3" },
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                sx={{
                  marginBottom: "1rem",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#2c2c2c",
                    color: "#ffffff",
                  },
                  "& .MuiInputLabel-root": { color: "#b3b3b3" },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  marginBottom: "1rem",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#2c2c2c",
                    color: "#ffffff",
                  },
                  "& .MuiInputLabel-root": { color: "#b3b3b3" },
                }}
              />
              <CustomButton1 title={"Send Message"} />
            </form>
          </Paper>
        </Grid>

        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              backgroundColor: "#1e1e1e",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: "1rem", color: "white" }}
            >
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              <strong>Email:</strong> amitlandge333@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              <strong>Phone:</strong> +91 8669369593
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              <strong>Address:</strong> At Post- Paud, Tal-Mulshi, Dist-
              Pune,412108
            </Typography>
            <Typography variant="body1">
              Feel free to reach out for collaborations, projects, or any
              queries you may have!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
