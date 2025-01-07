import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Container,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

const CardDetails = () => {
  const { cid } = useParams(); // Get the project ID from the URL
  const [cardDetail, setCardDetais] = useState(null);
  const getCartData = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/amitlandge/Projects/refs/heads/main/cardDetails.json"
    );
    console.log(res.data);
    const findCardDetails = res?.data?.find((item) => item.id === cid);

    setCardDetais(findCardDetails);
  };
  console.log(cardDetail);
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <motion.div
      initial={{ transform: "translateX(800px)", opacity: 0 }}
      animate={{ transform: "translateX(0)", opacity: 1 }}
      transition={{ duration: 1 }}
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
