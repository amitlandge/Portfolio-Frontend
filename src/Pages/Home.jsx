import { Box } from "@mui/material";
import Hero from "./Hero";
import Cards from "./Cards";
import Achievement from "./Achievement";
import Projects from "./Projects";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Cards />
      <Achievement />
      <Projects />
    </Box>
  );
};

export default Home;
