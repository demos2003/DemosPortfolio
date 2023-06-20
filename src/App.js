import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import Services from "./Views/Services";
import Skills from "./Views/Skills";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
// import Navigation from "./Components/Navigation";
import Navo from "./Views/Navo";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const delay = 9500; // 2 seconds

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:"black",
              height:"100vh"

              
            }}
          >
            <iframe 
            style={{paddingTop:0,
            height: "300px", border:"none"}}
            src="https://embed.lottiefiles.com/animation/143896" ></iframe>
          </div>
        ) : (
          <Routes>
        
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
