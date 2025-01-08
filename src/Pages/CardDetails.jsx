import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Container,
} from "@mui/material";

import { useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";
import { toast } from "react-toastify";
import CustomButton1 from "../UI/CustomButton1";

const CardDetails = () => {
  const { cid } = useParams(); // Get the project ID from the URL

  const { data } = useQuery({
    queryKey: [
      "cardDetails",
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/cardDetails.json",
    ], // Unique key for caching
    queryFn: fetchData,
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
  const cardDetail = data?.find((item) => item.id === cid);
  if (!cardDetail) {
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
          Page not found
        </Typography>
        <CustomButton1 title={"Go Back"} url={"/home"} />
      </Box>
    );
  }
  return (
    <motion.div
      initial={{ transform: "translateX(800px)", opacity: 0 }}
      animate={{ transform: "translateX(0)", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ background: "#111111", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="md" sx={{ background: "#111111" }}>
          <Card sx={{ boxShadow: 5, padding: 3, background: "#272424" }}>
            {/* Image Section */}
            <CardMedia
              component="img"
              height="300"
              image={cardDetail?.url} // Replace with actual image
              alt={cardDetail?.title}
              sx={{ opacity: "0.5" }}
            />
            <CardContent>
              {/* Title and Overview */}
              <Typography
                variant="h4"
                component="h2"
                color="#ff0000"
                gutterBottom
              >
                {cardDetail?.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {cardDetail?.overview}
              </Typography>

              {/* Description Section */}
              <Typography variant="body1" paragraph>
                {cardDetail?.description}
              </Typography>

              {/* Tools Section */}
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Tools Used:
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {cardDetail?.tools?.map((tool, index) => (
                  <Chip
                    key={index}
                    label={tool}
                    sx={{
                      background: "#ff0000",
                    }}
                  />
                ))}
              </Box>

              {/* Use Cases Section */}
              <Typography variant="h6" sx={{ marginTop: 3 }}>
                Use Cases:
              </Typography>
              <ul>
                {cardDetail?.useCases?.map((useCase, index) => (
                  <li key={index}>
                    <Typography variant="body2">{useCase}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </motion.div>
  );
};

export default CardDetails;
