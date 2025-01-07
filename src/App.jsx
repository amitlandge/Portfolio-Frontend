import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllProjects from "./Pages/AllProjects";
import ProjectDetails from "./Pages/ProjectDetails";
import CardDetails from "./Pages/CardDetails";
import Footer from "./Pages/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:pid" element={<ProjectDetails />} />
            <Route path="/card/:cid" element={<CardDetails />} />
          </Routes>
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
