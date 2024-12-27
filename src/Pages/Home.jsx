import { Box } from "@mui/material";
import Hero from "./Hero";
import Cards from "./Cards";
import Achievement from "./Achievement";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Cards />
      <Achievement />
    </Box>
  );
};

export default Home;
