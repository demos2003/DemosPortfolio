import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import Services from "./Views/Services";
import Skills from "./Views/Skills";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import {createContext} from "react"
import Navbar from "./Components/Navbar1";

export const ThemeContext = createContext(null);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 9000; // 2 seconds

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

    const [theme, setTheme] = useState("dark")

     const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
     };


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
 
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
    </ThemeContext.Provider>
  );
}


export default App