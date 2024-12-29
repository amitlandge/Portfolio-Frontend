import { Box } from "@mui/material";
import Hero from "./Hero";
import Cards from "./Cards";
import Achievement from "./Achievement";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Cards />
      <Achievement />
      <Projects />
      <Footer />
    </Box>
  );
};

export default Home;
