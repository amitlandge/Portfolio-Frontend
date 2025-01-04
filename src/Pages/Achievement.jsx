import { Box, Typography, Grid as Grid2 } from "@mui/material";

const stats = [
  { number: "50+", label: "Github Repository" },
  { number: "6+", label: "Achievement" },
  { number: "1+", label: "Experience" },
  { number: "5+", label: "Certification" },
];

const Achievement = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1D1D",
        color: "#fff",
        padding: "4rem",
      }}
    >
      <Grid2 container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid2 xs={12} md={4}>
          <Box textAlign="center" margin={"1rem"}>
            <Typography
              variant="h1"
              sx={{
                color: "#FF0000",
                fontWeight: "bold",

                marginBottom: "1rem",
              }}
            >
              40+
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "300",
              }}
            >
              Completed Projects
            </Typography>
          </Box>
        </Grid2>

        {/* Right Side */}
        <Grid2 xs={12} md={8}>
          <Grid2 container spacing={4}>
            {stats.map((stat, index) => (
              <Grid2 item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#272424",
                    padding: "3rem 1rem",
                    textAlign: "center",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FF0000",
                      fontWeight: "bold",

                      marginBottom: "1rem",
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.4rem",
                      fontWeight: "300",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Achievement;
