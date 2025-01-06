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
import { Opacity } from "@mui/icons-material";

const cardDetail = {
  id: "c1",
  title: "Frontend Development",
  overview: "Crafting visually appealing and responsive user interfaces.",
  description:
    "Frontend Development involves creating user-centric interfaces that are visually appealing and highly functional. Using React, I build dynamic single-page applications. Tailwind CSS and Material UI enhance the design aesthetics and maintain consistency across components. My approach ensures responsiveness, accessibility, and interactive features to improve user engagement.",
  tools: ["React", "Redux", "Tailwind CSS", "Material UI"],
  useCases: [
    "Building responsive websites",
    "Creating interactive single-page applications",
    "Optimizing performance for client-side rendering",
  ],
};

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
  );
};

export default CardDetails;
